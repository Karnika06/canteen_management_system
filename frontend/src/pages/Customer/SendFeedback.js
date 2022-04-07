import './SendFeedback.css'

function SendFeedback() {
  return (
    <div className='main'>
        <div className='form_container'>
            <h2>Give Your Feedback</h2>
            <table className="form_table">
          <tbody>
            

            <tr className='form-row'>
            <td className="form-label">Email Id</td>
            <input className='form-input' type="email" placeholder='Enter email ID'></input>
            </tr>

            <tr className='form-row'>
              <td className="form-label">Date</td>
              <input className='form-input' type="date" placeholder='Enter your full name'></input>
            </tr>

            <tr className='form-row'>
            <td className="form-label">Feedback</td>
            <textarea cols="15" rows="4" className='feedback-textarea' placeholder='Enter your opinions here'></textarea>
            </tr>
            
          </tbody>
        </table>
        <div className="add_btn mt-2">
          <button className="btn-feedback">Send Feedback</button>
        </div>
            
        </div>
        </div>
  )
}


export default SendFeedback