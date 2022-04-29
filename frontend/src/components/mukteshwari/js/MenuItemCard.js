import { AddRounded } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import "../css/MenuItemCard.css";

import { useSelector, useDispatch } from "react-redux";
import { AddItemsToCart } from "../../../actions/cartAction";

function MenuItemCard({ imgSrc, name, price, desc, itemId, ...item }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.carts)
  const { loading, error, fooditems, fooditemCount } = useSelector(
    (state) => state.fooditems
  );

  const itemIndexUpd = fooditems.findIndex((item) => item._id === itemId);
  const sendToCart = (e) => {
    
    e.qty = 0;
    //console.log(e)
    fooditems[itemIndexUpd].food_quantity = fooditems[itemIndexUpd].food_quantity - 1;
    dispatch(AddItemsToCart(e));
  };

  return (
    <div className="itemCard" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>

        <p className="description">{desc}</p>
        <p className="availability" style={{ 
          color: item.food_quantity===0 ? "red" : "green",
          textShadow: item.food_quantity===0 ? "rgba(143,8,8,0.94) 0px 0px 14px":"rgba(45,166,5,0.94) 0px 0px 14px"
        }}>Available quantity: {item.food_quantity}</p>
        <div className="bottom">
          <h3 className="price">{price}</h3>

          <i className="addToCart" onClick={() => sendToCart(item)}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
