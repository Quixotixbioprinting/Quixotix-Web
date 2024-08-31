import React from "react";
import Logo from "../assets/Quixotix_E5.png"

function Navbar() {
    return (
        <div className="navbar bg-base-100 font-mono">
  <div className="flex-1">
    <img id="logo" src={Logo}/>
  </div>
  <div className="flex-none">
  
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
    </ul>
    <ul className="menu menu-horizontal px-1">
      <li><a>Support</a></li>
    </ul>
    <ul className="menu menu-horizontal px-1">
      <li><a>About Us</a></li>
    </ul>
    <ul className="menu menu-horizontal px-1">
      <li><a>FAQ</a></li>
    </ul>
    
  </div>
</div>
    )
}

export default Navbar;