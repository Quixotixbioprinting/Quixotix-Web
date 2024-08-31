## API Paths

`$BASE_URL = 'http://localhost:8000/api/v1`

### Auth Paths

- **`/users/`**
- **`/token/login/` (Token Based Authentication)**
- **`/token/logout/` (Token Based Authentication)**
  <hr>
- `/users/me/`
- `/users/confirm/`
- `/users/resend_activation/`
- `/users/set_password/`
- `/users/reset_password/`
- `/users/reset_password_confirm/`
- `/users/set_username/`
- `/users/reset_username/`
- `/users/reset_username_confirm/`
- `/jwt/create/` (JSON Web Token Authentication)
- `/jwt/refresh/` (JSON Web Token Authentication)
- `/jwt/verify/` (JSON Web Token Authentication)

### Order Functionalities Paths

- ```/checkout/``` - For checkout the order and create and order request
- ```/orders/``` - Check all the order related to a single user
- ```/transaction/<str:pk>``` - Request to add the different razorpay ids generated after the payment

### Product Paths

- ```/products/``` - Shows all the product
- ```/products/search/``` - Search for a particular product
- ```/products/<slug:category_slug>/<slug:product_slug>/``` - Search with a category and product id
- ```/products/<slug:category_slug>/``` - Search with category only

