import React from "react";
import useViewport from "../../../viewport/useViewport";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userAction";

export default function Navbar() {

  const dispatch = useDispatch();
  const { isMobile, isTablet } = useViewport();

  function logoutUser() {
    dispatch(logout());
    window.alert("Logged Out");
  }

  return (
    <div className="top-bar">
      <div className="top-left">
        <img className="logo" src="digitalLogo.png" alt="Logo" />
      </div>
      <div
        className="top-center"
        style={{ display: isMobile ? "none" : "inline" }}
      >
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/admin"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/admin/additem"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add item
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/admin/viewitems"
              style={{ textDecoration: "none", color: "white" }}
            >
              View items
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/admin/feedback"
              style={{ textDecoration: "none", color: "white" }}
            >
              View Feedback
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/admin/orderhistory"
              style={{ textDecoration: "none", color: "white" }}
            >
              Order history
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/admin/viewcustomer"
              style={{ textDecoration: "none", color: "white" }}
            >
              View Customer
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="top-right">
        <button
          className="logout"
          style={{ display: isMobile ? "none" : "inline", width: "70%" }}
        >
          <NavLink
            to="/"
            onClick={(e) => logoutUser()}
            style={{ textDecoration: "none", color: "white" }}
          >
            Log out
          </NavLink>
        </button>
        <div className="Menu" style={{ display: isMobile ? "inline" : "none" }}>
          <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
        </div>
      </div>
    </div>
  );
}
