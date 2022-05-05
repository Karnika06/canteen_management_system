import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const UpdatePassword = () => {
  let navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = async (e) => {
    e.preventDefault();
    console.log(newPassword);
    await fetch(`http://localhost:4000/api/v1/password/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
        confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          alert("Password Updated!");
          navigate("/login");
        } else {
          alert("Password update failed!!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <div className="UpdatePasswordBox">
        <h2>Update Profile</h2>
        <form className="Updateform" onSubmit={updatePasswordSubmit}>
          <div className="oldPassword">
            <input
              type="password"
              placeholder="Old Password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="newPassword">
            <input
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="confirmPassword">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Change Password"
            className="ChangePasswordButton"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default UpdatePassword;
