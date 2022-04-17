import React, { useState, useEffect } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import Navbar from "../../../components/shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../actions/userAction";

const Register = () => {
  const dispatch = useDispatch();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  //const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact_no: "",
    password: "",
  });

  const { name, email, contact_no, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("contact_no", contact_no);
    myForm.set("password", password);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  };

  // const inputs = [
  //   {
  //     id: "user_name",
  //     icon: "fa-solid fa-user",
  //     name: "name",
  //     type: "text",
  //     placeholder: "Your name",
  //   },
  //   {
  //     id: "user_email",
  //     icon: "fa-solid fa-envelope",
  //     name: "email",
  //     type: "email",
  //     placeholder: "Your Email",
  //   },
  //   {
  //     id: "user_contact",
  //     icon: "fa-solid fa-phone",
  //     name: "contact_no",
  //     type: "tel",
  //     placeholder: "Your Contact Number",
  //     pattern: "^[0-9]{10}$",
  //     errorMessage: "Contact number should have 10 digits",

  //   },
  //   {
  //     id: "user_pass",
  //     icon: "fa-solid fa-lock",
  //     name: "password",
  //     type: "password",
  //     placeholder: "New Password",
  //     pattern: "^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$",
  //     errorMessage:
  //       "Password should be 5-20 characters and include at least 1 letter, 1 number and 1 special character(no space)",

  //   },
  //   {
  //     id: "user_cpass",
  //     icon: "fa-solid fa-lock",
  //     name: "cpassword",
  //     type: "password",
  //     placeholder: "Confirm Password",
  //     pattern: user.password,
  //     errorMessage: "Passwords don't match",
  //   },
  // ];

  //   const handleInput = (e) => {
  //     //console.log(e);
  //     name = e.target.name;
  //     value = e.target.value;

  //     setUser({ ...user, [name]: value });
  //   };

  //   useEffect(() => {
  //     console.log(errors);
  //     if(Object.keys(errors).length === 0 && isSubmit){
  //         console.log(user);
  //         //PostData(user);
  //     }
  // },[errors]);

  //   const handleSubmit  = (e) => {
  //     e.preventDefault();
  //     setErrors(validate(user));
  //     setIsSubmit(true);
  // }

  // const PostData = async (e) => {

  //   const { name, email, contact_no, password, cpassword } = user;
  //   /*const res = await fetch("/register",{
  //     method: "POST",
  //     headers:{
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify({
  //       name, email, contact_no, password, cpassword
  //     })
  //   });

  //   const data = await res.json();
  //   if(data.status === 422 || !data){
  //     window.alert("Invalid Registration");
  //   }else{
  //     window.alert("Successful Registration");
  //     //history.push("/login");
  //   }*/
  // };

  // const validate = () => {
  //   const errors = {};
  //   const nameRegex = /^[a-zA-Z\s]{3,20}$/i ;
  //   const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i ;
  //   const contRegex = /^[0-9]{10}$/i;
  //   const passRegex = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$/i;

  //   if(!user.name){
  //     errors.name = "Email is required!";
  // }else if(!nameRegex.test(user.name)){
  //     errors.name = "Name should have more than 2 character and include only letters";
  // }
  //   if(!user.email){
  //       errors.email = "Email is required!";
  //   }else if(!emailRegex.test(user.email)){
  //       errors.email = "Not a valid Email address";
  //   }

  //   if(!user.contact_no){
  //     errors.contact_no = "Contact number is required!";
  // }else if(!contRegex.test(user.contact_no)){
  //     errors.contact_no = "Contact number should have 10 digits";
  // }

  //   if(!user.password){
  //       errors.password = "Password is required!";
  //   }else if(!passRegex.test(user.password)){
  //       errors.password = "Password should be 5-20 characters and include at least 1 letter, 1 number and 1 special character(no space)";
  //   }

  //   if(!user.cpassword){
  //     errors.cpassword = "Password is required!";
  // }else if(user.cpassword !== user.password){
  //     errors.cpassword = "Passwords don't match";
  // }
  //   //else if(!regex.test(user.password))
  //   return errors;
  // }

  return (
    <>
      <Navbar />
      <section className="register">
        {/* <div className='container'> */}
        <div className="signup-image">
          <img src="loginRegister.jpeg" alt="registration pic" />
        </div>
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form
              className="signupform"
              onSubmit={registerSubmit}
            >
              <div className="signupName">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signupEmail">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signupContact">
                <input
                  type="number"
                  placeholder="Contact No."
                  required
                  name="contact_no"
                  value={contact_no}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signupPassword">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                />
              </div>
              <input type="submit" value="Register" className="signupButton" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
