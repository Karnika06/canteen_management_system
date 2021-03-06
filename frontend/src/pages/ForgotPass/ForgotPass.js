import "./ForgotPass.css";
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import Navbar from "../../components/shared/Navbar";

function ForgotPass() {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(
    (state) => state.forgotReducer
  );

  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    await fetch("http://localhost:4000/api/v1/password/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          alert("Check your mail!!");
        } else {
          alert("Password reset failed!!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <div class="forgot-row">
        <h1>Forgot Password</h1>
        <h6 class="information-text">
          Enter your registered email to reset your password.
        </h6>
        <div class="form-group">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="user_email"
              id="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <p>
              <label for="username">Email</label>
            </p>
            <button type="submit">Reset Password</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPass;
