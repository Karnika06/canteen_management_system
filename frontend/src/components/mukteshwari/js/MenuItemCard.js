import { AddRounded } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import "../css/MenuItemCard.css";
import {Items} from "../../../Data/Category";

function MenuItemCard({ imgSrc, name, price, desc, itemId }) {

  const [isCart, setCart] = useState(null);
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
          <i className="addToCart" onClick={() => setCart(Items.find((n) => n.id === itemId))}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
