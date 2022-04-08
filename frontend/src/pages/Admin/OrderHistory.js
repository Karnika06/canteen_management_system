import React from 'react'

function OrderHistory() {
  return (
    <div className="mt-5">
      <div className="container">

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Order Id</th>
              <th scope="col">Contact number</th>
              <th scope="col">View Order</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <th scope="row">1</th>
              <td>karnika621@gmail.com</td>
              <td>
                  Order124
              </td>
              <td>
                  9044004164
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

export default OrderHistory