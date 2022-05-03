import React from 'react'
import './ForgotPass.css'

function ForgotPass() {
  return (
    <div class="row">
		<h1>Forgot Password</h1>
		<h6 class="information-text">Enter your registered email to reset your password.</h6>
		<div class="form-group">
			<input type="email" name="user_email" id="user_email"></input>
			<p><label for="username">Email</label></p>
			<button onclick="showSpinner()">Reset Password</button>
		</div>
	</div>
  )
}

export default ForgotPass