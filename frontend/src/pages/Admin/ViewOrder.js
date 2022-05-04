import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


function ViewOrder() {

    const {id} = useParams("")
  const [getOrderDetails, setOrderDetails] = useState([])

  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );

    const getData = async () => {

        //getting data from backend
        await fetch(`http://localhost:4000/api/v1/order/${id}`, {
          method: "get",
          headers: {
            authorization: User.token,
            "Content-Type": "application/json",
          },
          
        })
          .then((res) => res.json())
          .then((data) => {
            setOrderDetails(data.order)
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
    <div>
        <h2>Customer name - {getOrderDetails.full_name}</h2>
        
        <h4>Order ID - {getOrderDetails._id}</h4>
        <h4>Address - {getOrderDetails.address}</h4>
        <h4>Contact no. - {getOrderDetails.contact_no}</h4>
        <h4>Payment Method - {getOrderDetails.paymentMethod}</h4>
        {/* <h4>{getOrderDetails.items}</h4> */}
        <h4>Total Price - {getOrderDetails.totalPrice}</h4>
        <h4>Order Status - {getOrderDetails.orderStatus}</h4>
        <h4>Payment Status - {getOrderDetails.paymentStatus}</h4>

        <h4>Order Date - {getOrderDetails.paidAt}</h4>

    </div>
  )
}

export default ViewOrder