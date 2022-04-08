import React from 'react'

function MyOrders() {
  return (
    <div className="mt-5">
      <div className="container">

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Order Id</th>
              <th scope="col">Order Status</th>
              <th scope="col">Payment Status</th>
              <th scope="col">View Order</th>
              <th scope="col">Total</th>
              
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <th scope="row">1</th>
              <td>Order124</td>
              <td>
                  Preparing
              </td>
              <td>
                  Paid
            </td>
              <td>
              <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
              <td>300</td>
              
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders