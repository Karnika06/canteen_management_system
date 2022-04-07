import { AddRounded } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import "../css/MenuItemCard.css";
import {Items} from "../../../Data/Category";
import {useStateValue} from "../../../CartReducer/StateProvider"
import { actionType } from "../../../CartReducer/reducer";
import { getFooditem } from "../../../actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
let cartData =[]

function MenuItemCard({ imgSrc, name, price, desc, itemId }) {

  const [isCart, setCart] = useState(null);
  const[{}, dispatch] = useStateValue()

  const { loading, error, fooditems, fooditemCount } = useSelector(
    (state) => state.fooditems
  );

  useEffect(() => {
    
    if(isCart){
        cartData.push(isCart);
        dispatch({
          type: actionType.SET_CART,
          cart: cartData,
        })
       }
  }, [isCart]);

  return (
    <div className="itemCard" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>

        <p className="description">{desc}</p>
        <div className="bottom">
          <h3 className="price">{price}</h3>
          <i className="addToCart" onClick={() => setCart(fooditems.find((n) => n._id === itemId))}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
