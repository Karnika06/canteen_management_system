import React from 'react'

function UpdateProfile() {
  return (
    <div className='main'>
        <div className='form_container'>
            <h2>My Profile</h2>
            <table className="form_table">
          <tbody>
            <tr className='form-row'>
              <td className="form-label">Your Name</td>
              <input className='form-input' type="text" placeholder='Enter your full name'></input>
            </tr>

            <tr className='form-row'>
            <td className="form-label">Email Id</td>
            <input className='form-input' type="email" placeholder='Enter email ID'></input>
            </tr>
            <tr className='form-row'>
            <td className="form-label">Contact Number</td>
            <input className='form-input' type="email" placeholder='Enter your Contact Number'></input>
            </tr>
            
          </tbody>
        </table>
        <div className="add_btn mt-2">
          <button className="btn-feedback " style={{marginRight: "8px"}}>Edit Profile</button>
          <button className="btn-feedback">Change Password</button>
        </div>
            
        </div>
        </div>
  )
}

export default UpdateProfile