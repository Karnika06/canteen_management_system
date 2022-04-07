import React from 'react'

function ViewCustomer() {
  return (
    <div className="mt-5">
      <div className="container">

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Contact number</th>
              <th scope="col">View Orders</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <th scope="row">1</th>
              <td>karnika621@gmail.com</td>
              <td>
                  Karnika Brijpuria
              </td>
              <td>
                  9044004164
            </td>
              <td>
              <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewCustomer