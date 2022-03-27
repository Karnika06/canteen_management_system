import "../css/CartContainer.css";
import CartItem from "./CartItem";
import SubMenuContainer from "./SubMenuContainer";

function CartContainer() {
  return (
    <div className="rightMenu">
      <div className="debitCard">
        <img
          src="https://looturs.com/wp-content/uploads/2021/06/Screenshot-2021-06-22-153144-300x193.png"
          alt=""
        />
      </div>
      <div className="cartCheckoutContainer">
        <SubMenuContainer name={"Carts Items"} style={{height:"20px"}}/>
        <div className="cartContainer">
          <div className="cartItems">
            <CartItem
              name={"Burger Bristo"}
              imgSrc={
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              }
              price={"50"}
            />
    
          </div>
        </div>
        <div className="totalSection">
          <h3>Total</h3>
          <p>
            <span>Rs.</span> 34
          </p>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}

export default CartContainer;
