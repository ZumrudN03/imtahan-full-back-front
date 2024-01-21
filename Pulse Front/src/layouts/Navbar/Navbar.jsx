import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss"
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="logo">
        <Link to={"/"}>  <h2>
            Pulse<span>.</span>
          </h2></Link>
        </div>
        <div className="lists">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/add"}>Add Product</NavLink>
          <NavLink to={"/wishlist"}>Wishlist</NavLink>
          <NavLink to={"/basket"}>Basket</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
        <div className="reservation">
          <p>
            <span>Reservations</span>
            <i class="fa-solid fa-phone"></i>077 514 77 70
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
