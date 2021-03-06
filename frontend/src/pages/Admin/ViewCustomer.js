import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Create, Delete, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function ViewCustomer() {

  const [getUser, setUser] = useState([])
  const [getRole, setRole] = useState()

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );

  const getData = async () => {
  
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1/admin/users`, {
      method: "get",
      headers: {
        authorization: User.token,
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
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Contact number</th>
              <th scope="col">Role</th>
              <th scope="col">View</th>
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
            <td>
            <select name="UserRole" id="user-role" onChange={handleChange}>
              <option defaultValue="currentRole">{data.role}</option>
              { data.role === 'admin' ?
                          <option value='user'>user</option>:
                          <option value='admin'>admin</option> 

              }
              
            </select>
            <button style={{backgroundColor: "white", border:"none"}} onClick={() => updateRole(data._id)}>
                  <Create style={{color: "grey"}}/>
                </button>
            </td>
            {/* <td>{data.role}<button style={{backgroundColor: "white", border:"none"}}>
                  <Create style={{color: "grey"}}/>
                </button></td> */}
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