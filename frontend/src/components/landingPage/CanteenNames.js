import React from 'react'
import './CanteenNames.css'
import {Link} from "react-router-dom"

export default function CanteenNames() {
  return (
    <div className = "canteen-bar">
      
        <ul className='canteen-list'>
          <li className='canteen-name'><Link to="/mukteshwari" style={{ textDecoration: "none", color: "white" }}>Mukteshwari</Link></li>
          
        </ul>
    
    </div>
  )
}
