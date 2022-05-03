import React from 'react'
import useViewport from "../../../viewport/useViewport";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../css/Navbar.css"
import { logout } from "../../../actions/userAction";

export default function Navbar() {

  const dispatch = useDispatch();
    const { isMobile, isTablet } = useViewport();
    const { loading, error, isAuthenticated, User } = useSelector(
      (state) => state.user
    );

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
              to="/mukteshwari"
              style={{ textDecoration: "none", color: "white" }}
            >
              Menu
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/mukteshwari/myorders"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Orders
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/mukteshwari/myProfile"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Profile
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/mukteshwari/sendFeedback"
              style={{ textDecoration: "none", color: "white" }}
            >
              Send Feedback
            </NavLink>
          </li>
          
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/mukteshwari/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About Us
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/mukteshwari/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="top-right">
      {/* <i class="fa-solid fa-cart-shopping" style={{ color: "white" }}></i>
        <div className="Menu" style={{ display: isMobile ? "inline" : "none" }}>
          <i class="fa-solid fa-bars" style={{ color: "white" }}></i> */}

<button
          className="signUpRegister"
          style={{ display: isMobile ? "none" : "inline" ,width:"70%"}}
        >
          {isAuthenticated ?
          <NavLink
            to="/"
            onClick={(e) => logoutUser()}
            style={{ textDecoration: "none", color: "white" }}
          >
            Log out
          </NavLink> :
          <NavLink
          to="/login"
          style={{ textDecoration: "none", color: "white" }}
        >
          Log in
        </NavLink>
          }

</button>
        
      </div>
    </div>
  )
}
