import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

function MyOrders() {

  const [getMyOrder, setMyOrder] = useState([])
  
  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );

  const getData = async () => {
  
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1/orders/me`, {
      method: "get",
      headers: {
        authorization: User.token,
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data.orders)
        console.log(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect (() => {
    getData()
  },[])

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
          {getMyOrder && getMyOrder.map((data,key) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders