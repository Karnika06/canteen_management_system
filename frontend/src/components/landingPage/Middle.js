import React from 'react'
import { AboutCardDetails } from "../../Data/Cards";
import  CardGroup  from "./CardGroup"

export default function Middle() {
  return (
    <div style={{justifyContent: "center",alignItems:"center", display: "flex", flexDirection: "column"}}>
      {AboutCardDetails.map((item, index) => (
               <CardGroup key={index} item={item}/>    
            ))}
    </div>
  )
}