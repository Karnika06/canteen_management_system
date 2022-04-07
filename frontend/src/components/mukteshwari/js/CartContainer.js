import { useStateValue } from "../../../CartReducer/StateProvider";
import "../css/CartContainer.css";
import CartItem from "./CartItem";
import SubMenuContainer from "./SubMenuContainer";

function CartContainer() {

    const [{cart}, dispatch] = useStateValue();
  return (
    <div className="rightMenu">
      <div className="debitCard">
        <img
          src="https://looturs.com/wp-content/uploads/2021/06/Screenshot-2021-06-22-153144-300x193.png"
          alt=""
        />
      </div>

      {!cart ? (<div></div>) : 
      (<div className="cartCheckoutContainer">
      <SubMenuContainer name={"Carts Items"} style={{height:"20px"}}/>
      <div className="cartContainer">
        <div className="cartItems">
          {
            cart && cart.map(data => (
              
              <CartItem
               key = {data._id}
               itemId = {data._id}
                name={data.food_name}
                imgSrc={data.food_images[0].url}
                price={data.food_price}
              />
            ))
          }
  
        </div>
      </div>
        <div className="totalSection">
          <h3>Total</h3>
          <p>
            <span>Rs.</span> 34
          </p>
        </div>
        <button className="checkout">Checkout</button>
      </div>)
      }
      
    </div>
  );
}

export default CartContainer;
