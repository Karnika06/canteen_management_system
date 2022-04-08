import React from 'react'

function Home() {
  return (
    <div className="mt-5">
      <div className="container">

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">User Email</th>
              <th scope="col">Order Status</th>
              <th scope="col">Payment Status</th>
              <th scope="col">View Order</th>
              <th scope="col">Total</th>
              <th scope="col">Delete Order</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <th scope="row">1</th>
              <td>karnika621@gmail.com</td>
              <td>
                  <select name="Order Status" id="order-status">
                      
                  <option value='completed'>Completed</option>
                        <option value='preparing'>Preparing</option>
                      <option value='delivered'>Delivered</option>
                      <option value='canceled'>Canceled</option>
                  </select>
              </td>
              <td>
                  <select name="Payment Status" id="payment-status">
                          <option value='paid'>Paid</option>
                          <option value='unpaid'>Unpaid</option>
                      </select></td>
              <td>
              <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
              <td>300</td>
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

export default Home