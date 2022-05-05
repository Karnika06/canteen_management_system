import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, resetPassword } from "../../actions/userAction";
import Navbar from "../../components/shared/Navbar";

const ResetPassword = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    await fetch(`http://localhost:4000/api/v1/password/reset/${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password, confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          alert("Password Set!");
          navigate("/login");
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
      <div>
        <div>
          <h2>Forgot Password</h2>
          <form onSubmit={resetPasswordSubmit}>
            <div>
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Send"
              className="ForgotPasswordButton"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
