import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar navbar-brand">
        <Logo className="brand-logo" />
        <h2 className="brand-title">GG Event Booking</h2>
      </div>
      <div className="navbar navbar-menu">
        <NavLink
          className="menu-item"
          activeClassName="menu-item active"
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName="menu-item active"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName="menu-item active"
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
