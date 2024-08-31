import React from "react";
import {features} from "../data";
import More_Button from "../assets/More_Button.svg";

function Feature() {
    return (
      <div id="flexbox">
{features.map ((item, index)=> (

  <div id="feature-card" className="card bg-base-100 w-96 shadow-xl rounded-none" key={index} style={{background: item.bg }}>
  <figure className="px-5 pt-5">
    <img id="feature-icons"
      src={item.img}
      alt={item.title}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.desc}</p>
    <div className="card-actions text-center justify-center">
      <button id="more_button"><img src={More_Button}/></button>
    </div>
  </div>
</div>
))}
</div>
    )
}

export default Feature;


