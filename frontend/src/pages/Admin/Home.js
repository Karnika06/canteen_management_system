import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Create, Delete, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Home() {

  const [getOrder, setOrder] = useState([])
  const [getUserEmailID, setUserEmailID] = useState()
  const [getRole, setRole] = useState()

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

  const getUserData = async (id) => {
    
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1/admin/user/${id}`, {
      method: "get",
      headers: {
        authorization: User.token,
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEmailID(data)
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

    await axios.delete(`http://localhost:4000/api/v1/admin/user/${id}`,
    {
      headers: {
        authorization: User.token,
        "Content-Type": "application/json" 
      }
    }).then((res) =>{
        console.log(res.data)
        if(res.data.success === true){
          alert("User deleted Successfully!!")
        }else{
          alert("Deletion unsuccessful!!")
        }
        getData()
        
      }).catch(err => {
        console.log(err)
      })
    }

    //function to update role
    const updateRole = async(id) =>{

      const role = getRole
      await axios.put(`http://localhost:4000/api/v1/admin/user/${id}`,
  {    
    role
  },
  {
    headers: {
      authorization: User.token,
      "Content-Type": "application/json" 
    }
  }).then((res) =>{
      console.log(res)
      if(res.data.success == true){

        alert("Role updated!!");
        //getData()
        navigate('/admin/viewcustomer')
      }else{
        alert("Role updation failed!! Try again!")
      }
      
    }).catch(err => {
      console.log(err)
    })
    }

    const handleChange = (e) =>{
      console.log(e.target)
      setRole(e.target.value)
    }

    useEffect (()=>{
      console.log(getRole)
    },[getRole])

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
              <th scope="col">Delete Order</th>
            </tr>
          </thead>
          <tbody>
          {getOrder && getOrder.map((data,key) => (
            <tr className="table-row">
              <th scope="row">{i++}</th>
              <td>{data.full_name}</td>
              <td>karnika621@gmail.com</td>
              <td>
                  <select name="OrderStatus" id="order-status">
                      <option defaultValue='currentStatusOrder'>{data.orderStatus}</option>
                  <option value='completed'>Completed</option>
                        <option value='preparing'>Preparing</option>
                      <option value='delivered'>Delivered</option>
                      <option value='canceled'>Canceled</option>
                  </select>
              </td>
              <td>
          
              
                  <select name="PaymentStatus" id="payment-status">
                    <option defaultValue="currentStatus">{data.paymentStatus}</option>
                    { getOrder.paymentStatus === 'Unpaid' ?
                    <option value='paid'>Paid</option>:
                          <option value='unpaid'>Unpaid</option>

                    }
                          
                      </select></td>
              <td>
              <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
              <td>{data.totalPrice}</td>
              <td className="view-edit-delete">
                <button className="btn btn-danger">
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