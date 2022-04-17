import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { actionType } from '../../../CartReducer/reducer';
import { useStateValue } from '../../../CartReducer/StateProvider';
import "../css/CartItem.css"
let cartItems = []

function CartItem({ name,imgSrc,price, itemId}) { 

    const [qty, setQty] = useState(1);
    const [{cart}, dispatch] = useStateValue();
    const [items, setItems] = useState([]);
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseInt(price));

    const cartDispatch = () => {
    
        dispatch({
          type: actionType.SET_CART,
              cart: items,
        })
        console.log(cart)
      }

    useEffect(() => {
        setItems(cart);
        setItemPrice(parseInt(qty) * parseInt(price));
    },[qty]);

    const updateQuantity = (action, id) => {
        if(action === 'add'){
            setQty(qty+1);
            cart.map((item) => {
                if(item._id === id){
                    item.food_quantity -= 1;
                }
            })
            cartDispatch();
        }else{
            if(qty == 1)
            {  
                setItems(cart.filter((item) => item._id !== id))
                cartDispatch();
                /*dispatch({
                    type: actionType.SET_CART,
                    cart: cartItems.splice(id, 1),
                })*/
            }
            else{
            setQty(qty - 1);
            cart.map((item) => {
                if(item._id === id){
                    item.food_quantity += 1;
                }
            })
            cartDispatch();
            }}
            
        }
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
                    <RemoveRounded className='itemRemove' onClick = {() => updateQuantity('remove', itemId)}/>
                    
                    <AddRounded className='itemAdd' onClick = {() => updateQuantity('add', itemId)}/>
                </div>
            </div>
        </div>
        <p className='itemPrice'>
            <span className='rupeesSign'>Rs.</span>
            <span className='itemPriceValue'>{itemPrice}</span>
        </p>

    </div>
  )
}

export default CartItem