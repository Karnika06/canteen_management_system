import React from 'react'

function FeedbackOfCust() {
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
            <tr className="table-row">
              <th scope="row">1</th>
              <td>karnika621@gmail.com
              </td>
              <td>Food was really great!!</td>
              <td>20-02-2022</td>
              
              <td className="view-edit-delete">
                <button className="btn btn-danger">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FeedbackOfCust