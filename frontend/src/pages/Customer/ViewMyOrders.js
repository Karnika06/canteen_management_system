import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

function ViewMyOrders() {

    const {id} = useParams("")
  const [getOrderDetails, setOrderDetails] = useState([])
  const [cartItems, setCartItems] = useState([])

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
            setCartItems(data.order.items)
            console.log(data);
            console.log(data.order.items);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect (() => {
        getData()
      },[])

  return (
    <div className="main-order-table" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", alignContent:"center"}}>
    <h2 style={{padding:"20px"}}>Order Details</h2>
    <table class="table table-bordered table-dark" style={{width:"85%"}}>
  
  <tbody>
    <tr>
      <th scope="row">Customer Name</th>
      
      <td>{getOrderDetails.full_name}</td>
      
    </tr>
    <tr>
      <th scope="row">Order ID</th>
      <td> {getOrderDetails._id} </td>
    </tr>
    <tr>
      <th>Address</th>
      
      <td>{getOrderDetails.address}</td>
    </tr>
        <tr>
      <th scope="row">Contact no.</th>
      
      <td>{getOrderDetails.contact_no}</td>
    </tr> 
        <tr>
      <th scope="row">Payment Method</th>
        <td>{getOrderDetails.paymentMethod}</td>
    </tr>
    <tr>
      <th scope="row">Cart items</th>
      
      <td>
        <tr>
          <th scope="row" style={{padding:"5px"}}>Food name</th>
          <th scope="row" style={{padding:"5px"}}>Food Price</th>
          <th scope="row" style={{padding:"5px"}}>Food quantity</th>
        </tr>
        {cartItems.map((data) => 
        <tr>
          <td style={{padding:"5px"}}>{data.food_name}</td>
          <td style={{padding:"5px"}}>{data.food_price}</td>
          <td style={{padding:"5px"}}>{data.qty}</td>
        </tr>
        ) }
      </td>
    </tr>
         <tr>
      <th scope="row">Total Price</th>
      
      <td>{getOrderDetails.totalPrice}</td>
    </tr>
        <tr>
      <th scope="row">Order Status</th>
      
      <td>{getOrderDetails.orderStatus}</td>
    </tr>
         <tr>
      <th scope="row">Payment  Status</th>
      
      <td>{getOrderDetails.paymentStatus}</td>
    </tr>
    <tr>
      <th scope="row">Order Date</th>
      
      <td>{getOrderDetails.paidAt}</td>
    </tr>
  </tbody>
</table>
        

    </div>
  )
}

export default ViewMyOrders