import "./App.css";
import React, { useEffect } from "react";
import Landing from "./pages/landingPage/Landing";
import ViewportProvider from "./viewport";
import AwesomeSlider from "react-awesome-slider";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/landingPage/AboutUs/AboutUs";
import ContactUs from "./pages/landingPage/ContactUs/ContactUs";
import Register from "./pages/landingPage/LogInRegister/Register";
import Login from "./pages/landingPage/LogInRegister/Login";
import Mukteshwari from "./pages/Customer/Mukteshwari";
import { useSelector, useDispatch } from "react-redux";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import AdminMukteshwari from "./pages/Admin/AdminMukteshwari";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Customer from "./pages/Customer/Customer";

import { loadUser } from "./actions/userAction";
import store from "./store";
import ResetPassword from "./pages/ResetPass/ResetPass";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <ViewportProvider>
        <Router>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mukteshwari/*" element={<Customer />} />
            <Route path="/admin/*" element={<AdminMukteshwari />} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPass/>} />
          </Routes>
        </Router>
      </ViewportProvider>
    </>
  );
}

export default App;
