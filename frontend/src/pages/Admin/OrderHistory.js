import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Create, Delete, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Moment from 'react-moment'




function OrderHistory() {

  const [getOrder, setOrder] = useState([])

  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );

  const getData = async () => {
  
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1/admin/orders`, {
      method: "get",
      headers: {
        authorization: User.token,
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data.orders)
        console.log(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect (() => {
    getData()
  },[])

  let i=1;
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
              <th scpoe="col">Date</th>
            </tr>
          </thead>
          <tbody>
          {getOrder && getOrder.map((data,key) => (
            <tr className="table-row">
              <th scope="row">{i++}</th>
              <td>{data.userEmail}</td>
              <td>
                  {data._id}
              </td>
              <td>
                  {data.contact_no}
            </td>
              <td>
              <NavLink
              exact
              activeClassName="active_class"
              to={`/admin/view-order/${data._id}`}>
              <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
                </NavLink>
              </td>
              <td>{data.totalPrice}</td>
              <td><Moment format="MM/DD/YYYY" date={data.paidAt}/></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderHistory