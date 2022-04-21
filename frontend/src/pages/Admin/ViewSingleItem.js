import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewSingleItem() {

  const {id} = useParams("")
  const [getFoodDetails, setFoodDetails] = useState([])

  const getData = async () => {
  
    //getting data from backend
    await fetch(`http://localhost:4000/api/v1//fooditem/${id}`, {
      method: "get",
      headers: {
        
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setFoodDetails(data.fooditem)
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
    <>
    
      <div>
        <img src={getFoodDetails.food_image} alt=""/>
      </div>
      <div>
        <h2>{getFoodDetails.food_name}</h2>
        <p>{getFoodDetails.food_description}</p>
        <h4>Price - {getFoodDetails.food_price}</h4>
        <h4>Quantity - {getFoodDetails.food_quantity}</h4>
        <h4>Food Category - {getFoodDetails.food_itemId}</h4>
      </div>
    </>
  )
}

export default ViewSingleItem