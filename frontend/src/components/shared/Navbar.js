import "./Navbar.css";
import { useState } from "react";
import useViewport from "../../viewport/useViewport";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { isMobile, isTablet } = useViewport();
  const [showMobileView, setShowMobileView] = useState(false);

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
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About Us
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active_class"
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="top-right">
        <button
          className="signUpRegister"
          style={{ display: isMobile ? "none" : "inline" ,width:"70%"}}
        >
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            Log in
          </NavLink>
        </button>
        <div className="Menu" style={{ display: isMobile ? "inline" : "none" }}>
          <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
        </div>
      </div>
    </div>
  );
}
