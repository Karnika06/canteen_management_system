import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useState } from "react";
import "../css/CartItem.css";
import { RemoveItemFromCart } from "../../../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { AddItemsToCart, RemoveSingleItem } from "../../../actions/cartAction";

function CartItem({ name, imgSrc, price, itemId, ...item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.carts);

  const [itemPrice, setItemPrice] = useState(
    parseInt(item.qty) * parseInt(price)
  );

  const removeItem = (id) => {
    dispatch(RemoveItemFromCart(id));
  };
  const decrementItem = () => {
    dispatch(RemoveSingleItem(item));
  };

  useEffect(() => {
    setItemPrice(parseInt(item.qty) * parseInt(price));
  }, [item.qty]);

  const sendToCart = () => {
    dispatch(AddItemsToCart(item));
  };

  const updateQuantity = (action, id) => {
    if (action === "add") {
      sendToCart();
    } else {
      if (item.qty == 1) {
        removeItem(id);
      } else {
        decrementItem();
      }
    }
  };

  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{item.qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />

            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="rupeesSign">Rs.</span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
