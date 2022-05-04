import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Create, Delete, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Home() {

  const [getOrder, setOrder] = useState([])
  const [getUserEmailID, setUserEmailID] = useState()
  const [getOrderStatus, setOrderStatus] = useState()
  const [getPaymentStatus, setPaymentStatus] = useState()

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
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

  const deleteUser = async (id) => {

    await axios.delete(`http://localhost:4000/api/v1/admin/order/${id}`,
    {
      headers: {
        authorization: User.token,
        "Content-Type": "application/json" 
      }
    }).then((res) =>{
        console.log(res.data)
        if(res.data.success === true){
          alert("Order deleted Successfully!!")
        }else{
          alert("Deletion unsuccessful!!")
        }
        getData()
        
      }).catch(err => {
        console.log(err)
      })
    }

    //function to Order Status
    const updateOrderStatus = async(id) =>{

      const orderStatus = getOrderStatus
      await axios.put(`http://localhost:4000/api/v1/admin/orderStatus/${id}`,
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

        alert("Order Status updated!!");
        //getData()
        navigate('/admin')
      }else{
        alert("Order status updation failed!! Try again!")
      }
      
    }).catch(err => {
      console.log(err)
    })
    }

    const handleOrderStatus = (e) =>{
      console.log(e.target)
      setOrderStatus(e.target.value)
    }

    useEffect (()=>{
      console.log(getOrderStatus)
    },[getOrderStatus])

    //update Payment Status
    const updatePaymentStatus = async(id) =>{

      const paymentStatus = getPaymentStatus
      await axios.put(`http://localhost:4000/api/v1/admin/paymentStatus/${id}`,
  {    
    paymentStatus
  },
  {
    headers: {
      authorization: User.token,
      "Content-Type": "application/json" 
    }
  }).then((res) =>{
      console.log(res)
      if(res.data.success == true){

        alert("Order Status updated!!");
        //getData()
        navigate('/admin')
      }else{
        alert("Order status update failed!! Try again!")
      }
      
    }).catch(err => {
      console.log(err)
    })
    }

    const handlePaymentStatus = (e) =>{
      console.log(e.target)
      setPaymentStatus(e.target.value)
    }

    useEffect (()=>{
      console.log(getPaymentStatus)
    },[getPaymentStatus])


  let i = 1
  return (
    <div className="mt-5">
      <div className="container">

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Email</th>
              <th scope="col">Order Status</th>
              <th scope="col">Payment Status</th>
              <th scope="col">View Order</th>
              <th scope="col">Total</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Delete Order</th>
            </tr>
          </thead>
          <tbody>
          {getOrder && getOrder.map((data,key) => (
            <tr className="table-row">
              <th scope="row">{i++}</th>
              <td>{data.full_name}</td>
              <td>{data.userEmail}</td>
              <td>
                  <select name="OrderStatus" id="order-status" onChange={handleOrderStatus}>
                      <option defaultValue='CurrentStatusOrder'>{data.orderStatus}</option>
                  <option value='Completed'>Completed</option>
                        <option value='Preparing'>Preparing</option>
                      <option value='Delivered'>Delivered</option>
                      <option value='Canceled'>Canceled</option>
                  </select>
                  <button style={{backgroundColor: "white", border:"none"}} onClick={() => updateOrderStatus(data._id)}>
                  <Create style={{color: "grey"}}/>
                </button>
              </td>
              <td>
          
              
                  <select name="PaymentStatus" id="payment-status" onChange={handlePaymentStatus}>
                    <option defaultValue="currentStatus">{data.paymentStatus}</option>
                    { data.paymentStatus === 'Unpaid' ?
                    <option value='Paid'>Paid</option>:
                          <option value='Unpaid'>Unpaid</option>

                    }
                          
                      </select>
                      <button style={{backgroundColor: "white", border:"none"}} onClick={() => updatePaymentStatus(data._id)}>
                  <Create style={{color: "grey"}}/>
                </button>
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
              <td>{data.paymentMethod}</td>
              <td className="view-edit-delete">
                <button className="btn btn-danger" onClick={() => deleteUser(data._id)}>
                  <i class="fas fa-trash"></i>
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

export default Home