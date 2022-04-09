import React, {useState, useHistory} from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import Navbar from '../../../components/shared/Navbar'

const Register = () => {

  //const history = useHistory();
  const [ user, setUser] = useState({
    name:"", email:"", contact_no:"", password:"", cpassword:""});

    let name, value;

  const handleInput = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const PostData = async(e) => {
    e.preventDefault();
    const { name, email, contact_no, password, cpassword} = user;
    const res = await fetch("/register",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, contact_no, password, cpassword
      })
    });

    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
    }else{
      window.alert("Successful Registration");
      //history.push("/login");
    }
  }
  
  return (
    <>
    <Navbar/>
      <section className="register">
        {/* <div className='container'> */}
        <div className="signup-image">
          <img src="loginRegister.jpeg" alt="registration pic" />
        </div>
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="form-content" id="register-form">
              
              <div className="form-group">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="name"
                  id="user_name"
                  autoCapitalize="off"
                  value={user.name}
                  onChange={handleInput}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-envelope"></i>
                <input
                  type="text"
                  name="email"
                  id="user_email"
                  autoCapitalize="off"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-phone"></i>
                <input
                  type="number"
                  name="contact_no"
                  id="user_contact"
                  autoCapitalize="off"
                  value={user.contact_no}
                  onChange={handleInput}
                  placeholder="Contact Number"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  id="user_pass"
                  autoCapitalize="off"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="New password"
                />
              </div>
              <div className="form-group">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="cpassword"
                  id="user_cpass"
                  autoCapitalize="off"
                  value={user.cpassword}
                  onChange={handleInput}
                  placeholder="Confirm password"
                />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                  onClick={PostData}
                />
              </div>
              <div className="form-group">
                <p>
                  Already have an account?<Link to="/login">Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* </div> */}
      </section>
    </>
  );
};

export default Register;
