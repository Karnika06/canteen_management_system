import './SendFeedback.css'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SendFeedback() {

  let navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    feedback_email: "",
    feedback_message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let name, value;

  const PostData  = async (e) => {
    const { feedback_email, feedback_message} = feedback;
    await fetch("http://localhost:4000/api/v1//feedback/new",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        feedback_email, feedback_message
      })
    }).then(res => res.json()).then(data => {
      console.log(data)
      alert("Thank you for your feedback!!");
      navigate("/mukteshwari")
    }).catch(err => {
      console.log(err)
    })
  }

  const handleInput = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;
    setFeedback({ ...feedback, [name]: value });
      
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(feedback));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(errors);

    if (Object.keys(errors).length === 0 && isSubmit) {
      //postData
      PostData();
    }
  }, [errors]);

  const validate = (feedback) => {
    const errors = {};
    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!feedback.feedback_email) {
      errors.feedback_email = "Email is required!";
    } else if (!regexForEmail.test(feedback.feedback_email)) {
      errors.feedback_email = "Not a valid email format!";
    }

    if(!feedback.feedback_message){
      errors.feedback_message = "Feedback is required!"
    }

    return errors;
  };


  return (
    <div className='main'>
        <div className='form_container'>
            <h2>Give Your Feedback</h2>
            <table className="form_table">
          <tbody>
            

            <tr className='form-row'>
            <td className="form-label">Email Id</td>
            <td><input name="feedback_email" className='form-input' type="email" placeholder='Enter email ID' value={feedback.feedback_email}
                  onChange={handleInput}></input></td>
            </tr>

            <tr className='form-row'>
            <td className="form-label">Feedback</td>
            <td><textarea cols="15" rows="4" name="feedback_message" className='feedback-textarea' placeholder='Enter your feedback here' value={feedback.feedback_message}
            onChange={handleInput}></textarea></td>
            </tr>
            
          </tbody>
        </table>
        <div className="add_btn mt-2">
          <button className="btn-feedback" onClick={handleSubmit}>Send Feedback</button>
        </div>
            
        </div>
        </div>
  )
}