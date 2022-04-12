import React,{useState, useEffect} from 'react'
import "./LoginRegister.css";
import {Link} from 'react-router-dom';
import Navbar from '../../../components/shared/Navbar'


export default function Login() {

    const [ user, setUser] = useState({
        email:"", password:""});
    
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    
        let name, value;
      const handleInput = (e) => {
        //console.log(e);
        name = e.target.name;
        value = e.target.value;
    
        setUser({...user, [name]:value});
      }

      const handleSubmit  = (e) => {
        e.preventDefault();
        setErrors(validate(user));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(errors);
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(user);
        }
    },[errors]);

      const validate = () => {
        const errors = {};
        const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passRegex = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$/i;
        
        if(!user.email){
            errors.email = "Email is required!";
        }else if(!regexForEmail.test(user.email)){
            errors.email = "Not a valid email format!";
        }
        
        if(!user.password){
            errors.password = "Password is required!";
        }else if(!passRegex.test(user.password)){
            errors.password = "Password should be 5-20 characters and include at least 1 letter, 1 number and 1 special character(no space)";
        }

        
        return errors;
      }
  return (
    <>
    <Navbar/>
    <section className='login'>
            {/* <div className='container'> */}
            
            
                <div className='login-content'>
                {Object.keys(errors).length === 0 && isSubmit ? (
                <div className='successful'>Logged In Successfully</div>)
            : (<div></div>)}
                    <div className='login-form'>
                        <h2 className='form-title'>Log in</h2>
                        <form className='form-content' id='register-form'>
                            <div className='form-group'>
                                <i class="fa-solid fa-user"></i>
                                <input type = "text" name="email" id ="email" autoCapitalize='off' 
                                value={user.email}
                                onChange={handleInput}
                                placeholder='Your email'/>
                            </div>
                            {errors.email && (<p className='validation-msgs'>{errors.email}</p>)}
                            
                            <div className='form-group'>
                                <i class="fa-solid fa-lock"></i>
                                <input type = "password" name="password" id ="pass" autoCapitalize='off' 
                                value={user.password}
                                onChange={handleInput}
                                placeholder='Your password' required/>
                            </div>
                            {errors.password && (<p className='validation-msgs'>{errors.password}</p>)}

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className='form-submit' value="Register" onClick={handleSubmit} required/>
                            </div>
                            <div className="form-group">
                                <p><Link to="">Forgot password?</Link></p>
                            </div>
                            <div className="form-group">
                                <p>Don't have an account?<Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className='login-image'>
                            <img src='loginRegister.jpeg' alt='registration pic'/>
                    </div>
                    
                    {/* </div> */}
        </section>
    </>
  )
}
