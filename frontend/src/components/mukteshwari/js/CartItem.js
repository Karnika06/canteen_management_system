import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import "../css/CartItem.css"

function CartItem({ price, name,imgSrc}) {

    const [qty, setQty] = useState(1);
  return (
    <div className='cartItem'>
        <div className='imgBox'>
            <img src={imgSrc} alt=''/>
        </div>

        <div className='itemSection'>
            <h2 className='itemName'>{name}</h2>
            <div className='itemQuantity'>
                <span>x{qty}</span>
                <div className='quantity'>
                    <RemoveRounded className='itemRemove'/>
                    
                    <AddRounded className='itemAdd'/>
                </div>
            </div>
        </div>
        <p className='itemPrice'>
            <span className='rupeesSign'>Rs.</span>
            <span className='itemPriceValue'>{price}</span>
        </p>

    </div>
  )
}

export default CartItem