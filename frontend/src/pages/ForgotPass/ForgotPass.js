
import './ForgotPass.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, forgotPassword } from '../../actions/userAction';

function ForgotPass() {
	const dispatch = useDispatch();
	const { error, message, loading } = useSelector(state => state.forgotReduer);

	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set("email ", email);
		dispatch(forgotPassword(myForm));
	};

	useEffect(() => {
	
		if (error) {

			alert(error);
			dispatch(clearErrors());

		}
		if(message){
			alert(message);
		}
	  }, [error , message , dispatch]);

	return (
		<div class="row">
			<h1>Forgot Password</h1>
			<h6 class="information-text">Enter your registered email to reset your password.</h6>
			<div class="form-group">
				<form onSubmit={handleSubmit}>
					<input type="email" name="user_email" id="user_email" value={email}
						onChange={(e) => setEmail(e.target.value)}></input>
					<p><label for="username">Email</label></p>
					<button type="submit" >Reset Password</button>
				</form>
			</div>
		</div>
	)
}

export default ForgotPass