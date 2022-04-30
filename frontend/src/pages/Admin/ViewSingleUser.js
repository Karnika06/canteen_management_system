import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

function ViewSingleUser() {
    const {id} = useParams("")
    const [getUserDetails, setUserDetails] = useState([])

    const dispatch = useDispatch();
  
  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );
  
    const getData = async () => {
    
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
          setUserDetails(data.user)
          console.log(data.user);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect (() => {
      getData()
    },[])
  
    return (
      <>
      
        
        <div>
          <h2>{getUserDetails.name}</h2>
          <h4>{getUserDetails.email}</h4>
          <h4>{getUserDetails.contact_no}</h4>
          <h4>{getUserDetails.role}</h4>
          
        </div>
      </>
    )
}

export default ViewSingleUser