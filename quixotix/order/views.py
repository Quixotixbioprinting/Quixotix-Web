import razorpay

from django.conf import settings
from django.contrib.auth.models import User
from django.http import Http404
from django.shortcuts import render

from rest_framework import status, authentication, permissions
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Order, OrderItem
from .serializer import OrderSerializer, MyOrderSerializer


@api_view(["POST"])
@authentication_classes([authentication.TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def checkout(request):
    serializer = OrderSerializer(data=request.data)

    if serializer.is_valid():
        rz_client = razorpay.Client(
            auth=(settings.RAZORPAY_ID, settings.RAZORPAY_SECRET)
        )
        paid_amount = sum(
            item.get("quantity") * item.get("product").price
            for item in serializer.validated_data["items"]
        )

        try:
            data = {
                "amount": serializer.validated_data.get("paid_amount"),
                "currency": "INR",
            }
            charge = rz_client.utility.create(data=data)
            serializer.save(
                user=request.user, paid_amount=paid_amount, order_id=charge.id
            )
            response = {
                "status_code": status.HTTP_201_CREATED,
                "message": "order created",
                "data": charge,
            }
            return Response(response, status=status.HTTP_201_CREATED)
        except Exception:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TransactionView(APIView):
    @api_view(["PATCH"])
    @authentication_classes([authentication.TokenAuthentication])
    @permission_classes([permissions.IsAuthenticated])
    def transaction(request, pk):
        if request.method == 'PATCH':
            order = Order.objects.filter(order_id=pk)
            serializer = OrderSerializer(order, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(data=serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class OrdersList(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        orders = Order.objects.filter(user=request.user)
        serializer = MyOrderSerializer(orders, many=True)
        return Response(serializer.data)
