import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Moment from 'react-moment'
import axios from 'axios';

function FeedbackOfCust() {

  const [getFeedbackDetails, setFeedbackDetails] = useState([])

  const getData = async () => {
  
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1/feedbacks`, {
      method: "get",
      headers: {
        
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedbackDetails(data.feedbacks)
        console.log(data.feedbacks);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect (() => {
    getData()
  },[])

  const deleteFeedback = async (id) => {

    await axios.delete(`http://localhost:4000/api/v1/feedbackDelete/${id}`,
    {
      headers: {
        // authorization: User.token,
        "Content-Type": "application/json" 
      }
    }).then((res) =>{
        console.log(res.data)
        alert("Feedback deleted Successfully!!")
        getData()
      }).catch(err => {
        console.log(err)
      })

    }

  let i = 1
  return (
    <div className="mt-5">
      <div className="container">

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Feedback</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {getFeedbackDetails && getFeedbackDetails.map((data) => (

          
            <tr className="table-row">
              <th scope="row">{i++}</th>
              <td>{data.feedback_email}
              </td>
              <td>{data.feedback_message}</td>
              <td><Moment format="MM/DD/YYYY" date={data.feedback_date}/></td>
              
              <td className="view-edit-delete">
                <button className="btn btn-danger" onClick={() => deleteFeedback(data._id)}>
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
           
          
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FeedbackOfCust