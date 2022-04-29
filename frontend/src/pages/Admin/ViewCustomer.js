import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { Create, Delete, RemoveRedEye } from "@mui/icons-material";

function ViewCustomer() {

  const [getUser, setUser] = useState([])

  const getData = async () => {
  
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1/admin/users`, {
      method: "get",
      headers: {
        
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users)
        console.log(data.users);
        
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
        // authorization: User.token,
        "Content-Type": "application/json" 
      }
    }).then((res) =>{
        console.log(res.data)
        alert("User deleted Successfully!!")
        getData()
      }).catch(err => {
        console.log(err)
      })

    }

  let i = 1
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
              <th scope="col">Role</th>
              <th scope="col">View Orders</th>
            </tr>
          </thead>
          <tbody>
          {getUser && getUser.map((data,key) => (
            <tr className="table-row">
              <th scope="row">{i++}</th>
              <td>{data.email}</td>
              <td>
                  {data.name}
              </td>
              <td>
                  {data.contact_no}
            </td>
            <td>{data.role}<button style={{backgroundColor: "white", border:"none"}}>
                  <Create style={{color: "grey"}}/>
                </button></td>
              <td>
              <NavLink
              exact
              activeClassName="active_class"
              to={`/admin/view-single-user/${data._id}`}
            >
              <button className="btn btn-success" >
                  <i class="fas fa-eye"></i>
                </button>
                </NavLink>
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

export default ViewCustomer