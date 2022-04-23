import { AddRounded } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import "../css/MenuItemCard.css";

import { useSelector, useDispatch } from "react-redux";
import { AddItemsToCart } from "../../../actions/cartAction";

function MenuItemCard({ imgSrc, name, price, desc, itemId, ...item }) {
  const dispatch = useDispatch();

  const sendToCart = (e) => {
    e.qty = 0;
    //console.log(e)
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
