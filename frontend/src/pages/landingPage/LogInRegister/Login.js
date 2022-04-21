import React, { useState, useRef, useEffect } from "react";
import "./LoginRegister.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../../components/shared/Navbar";
import {useDispatch, useSelector} from "react-redux";
import { clearErrors, login } from "../../../actions/userAction";

export default function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };

    //const { userDetails } = useSelector((state) => ({ ...user }));

    const { loading, error, isAuthenticated, User } = useSelector(
        (state) => state.user
      );

  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let name, value;
  const handleInput = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userDetail));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(userDetail);
    }
    if(isAuthenticated) {
        console.log(User)
        if(User.user.role === 'admin'){
            navigate('/admin')
        } else{
            navigate(`/`);
        }
    }
  }, [errors, navigate, isAuthenticated]);

  const validate = () => {
    const errors = {};
    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passRegex =
      /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$/i;

    if (!userDetail.email) {
      errors.email = "Email is required!";
    } else if (!regexForEmail.test(userDetail.email)) {
      errors.email = "Not a valid email format!";
    }

    if (!userDetail.password) {
      errors.password = "Password is required!";
    } else if (!passRegex.test(userDetail.password)) {
      errors.password =
        "Password should be 5-20 characters and include at least 1 letter, 1 number and 1 special character(no space)";
    }

    return errors;
  };
  return (
    <>
      <Navbar />
      <section className="login">
        {/* <div className='container'> */}

        <div className="login-content">
          {Object.keys(errors).length === 0 && isSubmit ? (
            <div className="successful">Logged In Successfully</div>
          ) : (
            <div></div>
          )}
          <div className="login-form">
            <h2 className="form-title">Log in</h2>
            <form className="form-content" id="register-form" onSubmit={loginSubmit} >
              <div className="form-group">
                <i class="fa-solid fa-user"></i>
                <input
                  type="mail"
                  name="email"
                  id="email"
                  required
                  autoCapitalize="off"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              {errors.email && (
                <p className="validation-msgs">{errors.email}</p>
              )}

              <div className="form-group">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  id="pass"
                  autoCapitalize="off"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                />
              </div>
              {errors.password && (
                <p className="validation-msgs">{errors.password}</p>
              )}

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Login"
                />
              </div>
              <div className="form-group">
                <p>
                  <Link to="/password/forgot">Forgot password?</Link>
                </p>
              </div>
              <div className="form-group">
                <p>
                  Don't have an account?<Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="login-image">
          <img src="loginRegister.jpeg" alt="registration pic" />
        </div>

        {/* </div> */}
      </section>
    </>
  );
}
