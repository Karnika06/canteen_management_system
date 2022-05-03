import { useStateValue } from "../../../reducers/StateProvider";
import "../css/CartContainer.css";
import CartItem from "./CartItem";
import SubMenuContainer from "./SubMenuContainer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { SetTotal } from "../../../actions/cartAction";


function CartContainer() {

    const [price, setPrice] = useState(0)
    const cart = useSelector((state) => state.cartReducer.carts)
    const dispatch = useDispatch();
    
    const { loading, error, isAuthenticated, User } = useSelector(
      (state) => state.user
    );

    const total = () => {
      let price = 0;
      cart.map((item, key) => {
        
        price = price + item.food_price * item.qty;
      })
      setPrice(price)
    }


    useEffect(() => {
    
      total();
      dispatch(SetTotal(price));    
    }, [total])

    
    
    

  return (
    <div className="rightMenu">
      <div className="debitCard">
        <img
          src="https://looturs.com/wp-content/uploads/2021/06/Screenshot-2021-06-22-153144-300x193.png"
          alt=""
        />
      </div>

      {/* {!cart ? (<div></div>) :  */}
      <div className="cartCheckoutContainer">
      <SubMenuContainer name={"Carts Items"} style={{height:"20px"}}/>
      <div className="cartContainer">
        <div className="cartItems">
          {
            cart && cart.map(data => (
              
              <CartItem
               key = {data._id}
               itemId = {data._id}
                name={data.food_name}
                imgSrc={data.food_image}
                price={data.food_price}
                {...data}
              />
            ))
          }
  
        </div>
      </div>
        <div className="totalSection">
          <h3>Total</h3>
          <p>
            <span>Rs.</span>{price}
          </p>
        </div>
        {isAuthenticated ?
        <Link to="/mukteshwari/ordernow"><button className="orderNow" >Order Now</button></Link> :
        <button className="orderNow" style={{fontSize: "14px"}}>Please login to order your food.</button>}
        
      </div>
      
      
    </div>
  );
}

export default CartContainer;
