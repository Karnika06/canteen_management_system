import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Create, Delete, RemoveRedEye } from "@mui/icons-material";
import  CancelPresentationIcon  from "@mui/icons-material//CancelPresentation";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function MyOrders() {

  const navigate = useNavigate();

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

  const handleCancel = async(id) => {

    const orderStatus = "Cancelled"
    //cancelling order
    await axios.put(`http://localhost:4000/api/v1/customer/cancelOrder/${id}`,
  {    
    orderStatus
  },
  {
    headers: {
      authorization: User.token,
      "Content-Type": "application/json" 
    }
  }).then((res) =>{
      console.log(res)
      if(res.data.success == true){

        alert("Order Cancelled!!");
        getData()
        navigate('/mukteshwari/myorders')
      }else{
        alert("Order status update failed!! Try again!")
      }
      
    }).catch(err => {
      console.log(err)
    })
    // await fetch(`http://localhost:4000/api/v1/`, {
    //   method: "put",
    //   headers: {
    //     authorization: User.token,
    //     "Content-Type": "application/json",
    //   },
      
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
        
    //     console.log(data);
        
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
let i=1;
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
              <th scope="col">Cancel Order</th>
              
            </tr>
          </thead>
          <tbody>
          {getMyOrder && getMyOrder.map((data,key) => (
            <tr className="table-row">
              <th scope="row">{i++}</th>
              <td>{data._id}</td>
              <td>
                  {data.orderStatus}
              </td>
              <td>
              {data.paymentStatus}
            </td>
              <td>
              <NavLink
              exact
              activeClassName="active_class"
              to={`/mukteshwari/view-order/${data._id}`}>
              <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
                </NavLink>
              </td>
              <td>{data.totalPrice}</td>
              <td>
              <button className="btn btn-danger" onClick={() => handleCancel(data._id)}>
                  <CancelPresentationIcon/>
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

export default MyOrders