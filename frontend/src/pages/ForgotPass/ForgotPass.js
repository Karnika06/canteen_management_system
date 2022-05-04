
import './ForgotPass.css'
import React, { useState, useEffect } from "react";

function ForgotPass() {

	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className="forgot-row">
		<h1>Forgot Password</h1>
		<h6 className="information-text">Enter your registered email to reset your password.</h6>
		<div className="form-group">
			<input type="email" name="user_email" id="user_email" value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
			<p><label for="username">Email</label></p>
			<button onclick={handleSubmit}>Reset Password</button>
		</div>
	</div>
  )
}

export default ForgotPass