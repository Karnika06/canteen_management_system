
import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UpdateProfile() {

  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );

  const [ userDetails, setUserDetails] = useState({
    name:"", contact_no:"" });
    const [errors, setErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false);
let name, value;

const updateUserData = async (e) => {

  const user = User._id;
  //e.preventDefault();
  
  const { name, contact_no} = userDetails;


  //posting data to backend

   await axios.put(`http://localhost:4000/api/v1/me/update`,
  {    
    name, contact_no, 
  },
  {
    headers: {
      authorization: User.token,
      "Content-Type": "application/json" 
    }
  }).then((res) =>{
      console.log(res.data)
      if(res.data.success == true){

        alert("Profile updated!!");
      }else{
        alert("Update failed!! Try again!")
      }
        // navigate('/admin/viewitems');
    }).catch(err => {
      console.log(err)
    })
  }

  const getData = async () => {
  
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1/me`, {
      method: "get",
      headers: {
        authorization: User.token,
        "user": User,
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data.user)
        console.log(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect (() => {
    getData()
  },[])

  const handleInput = (e) => {
    //console.log(e);
      name = e.target.name;

        value = e.target.value;
        setUserDetails({...userDetails, [name]:value});
    }

    const handleSubmit  = (e) => {
      e.preventDefault();
      setErrors(validate(userDetails));
      setIsSubmit(true);
  }

  useEffect(() => {
    console.log(errors);
    
    if(Object.keys(errors).length === 0 && isSubmit){
        console.log(userDetails);
        //postData
        updateUserData();
    }
},[errors]);

  const validate = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]{3,20}$/i ;
    const contRegex = /^[0-9]{10}$/i;

    if(!userDetails.name){
      errors.name = "Email is required!";
  }else if(!nameRegex.test(userDetails.name)){
      errors.name = "Name should have more than 2 character and include only letters";
  }

  if(!userDetails.contact_no){
    errors.contact_no = "Contact number is required!";
}else if(!contRegex.test(userDetails.contact_no)){
    errors.contact_no = "Contact number should have 10 digits";
}
return errors;
    
  }


  return (
    <div className="main">
      <div className="form_container">
        <h2>My Profile</h2>
        <table className="form_table">
          <tbody>

          <tr className='form-row'>
            <td className="form-label">Email Id</td>
            {/* <input className='form-input' type="email" placeholder='Enter email ID'></input> */}
            <label>{userDetails.email}</label>
            </tr>

            <tr className='form-row'>
              <td className="form-label">Your Name</td>
              <input className='form-input' onChange={handleInput} name="name" value={userDetails.name} type="text" placeholder='Enter your full name'></input>
              {errors.name && (<p className='validation-msgs'>{errors.name}</p>)}
            </tr>

            <tr className='form-row'>
            <td className="form-label">Contact Number</td>
            <input className='form-input' onChange={handleInput} name="contact_no" value={userDetails.contact_no} type="email" placeholder='Enter your Contact Number'></input>
            {errors.contact_no && (<p className='validation-msgs'>{errors.contact_no}</p>)}
</tr>
            <tr className="form-row">
              <td className="form-label">Your Name</td>
              <input
                className="form-input"
                type="text"
                placeholder="Enter your full name"
              ></input>
            </tr>

            <tr className="form-row">
              <td className="form-label">Email Id</td>
              <input
                className="form-input"
                type="email"
                placeholder="Enter email ID"
              ></input>
            </tr>
            <tr className="form-row">
              <td className="form-label">Contact Number</td>
              <input
                className="form-input"
                type="email"
                placeholder="Enter your Contact Number"
              ></input>
            </tr>
          </tbody>
        </table>
        <div className="add_btn mt-2">

          <button className="btn-feedback " onClick={handleSubmit} style={{marginRight: "8px"}}>Edit Profile</button>
          <button className="btn-feedback">Change Password</button>

        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
