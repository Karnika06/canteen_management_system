import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartContainer from "../../components/mukteshwari/js/CartContainer";
import "./Checkout.css";

function OrderNow() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cartReducer.carts);
  const total = useSelector((state) => state.cartReducer.total);
  //console.log(total)

  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );

  const [orderDetails, setOrderDetails] = useState({
    full_name: "",
    address: "",
    contact_no: "",
    items: [],
    paymentMethod: "",
    totalPrice: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let name, value;

  const PostData  = async (e) => {
    const { full_name, address, contact_no, items, paymentMethod, totalPrice} = orderDetails;
    const user = User;
    const userEmail = User.user.email;
    await fetch("http://localhost:4000/api/v1/order/new",{
      method: "POST",
      headers:{
        authorization: User.token,
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        full_name, address, contact_no, items, paymentMethod, totalPrice, user, userEmail
      })
    }).then(res => res.json()).then(data => {
      console.log(data)
      if(data.success === true){
        alert("Your order is confirmed!!");
        updateQuantity(data.order);
        navigate('/mukteshwari')
      }else{
        alert("Order failed!!")
      }
      
    }).catch(err => {
      console.log(err)
    })

  };

  const updateQuantity  = async (order) => {
    

    await fetch(`http://localhost:4000/api/v1/admin/order/${order._id}`,{
      method: "PUT",
      headers:{
        authorization: User.token,
        "Content-Type" : "application/json"
      },
      
    }).then(res => res.json()).then(data => {
      console.log(data)
      if(data.success === true){
        console.log("Quantity updated")
      }else{
        console.log("failed!!")
      }
      
    }).catch(err => {
      console.log(err)
    })

  };

  const handleInput = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    orderDetails.totalPrice = total;
    orderDetails.items = cart;
    console.log(orderDetails);
    setErrors(validate(orderDetails));
    setIsSubmit(true);
  };

    useEffect(() => {
      console.log(errors);

      if (Object.keys(errors).length === 0 && isSubmit) {
        //postData
        console.log(User.token)
        console.log(isAuthenticated)
        if(!cart){
        if (isAuthenticated) 
          PostData();
        }
        else
        alert("You can't order, Your cart is empty!!")
      }
    }, [errors]);

    const validate = () => {
      const errors = {};
      const nameRegex = /^[a-zA-Z\s]{3,20}$/i ;
    const contRegex = /^[0-9]{10}$/i;

    if(!orderDetails.full_name){
      errors.name = "Email is required!";
  }else if(!nameRegex.test(orderDetails.full_name)){
      errors.name = "Name should have more than 2 character and include only letters";
  }
   

    if(!orderDetails.contact_no){
      errors.contact_no = "Contact number is required!";
  }else if(!contRegex.test(orderDetails.contact_no)){
      errors.contact_no = "Contact number should have 10 digits";
  }
  
  if(!orderDetails.address){
      errors.address = "Address is required!";
  }
      return errors;
    };

  return (
    <>
      <div className="maincontainer">
        <div class="checkout-container">
          <div class="py-5 text-center">
            <h2>Checkout form</h2>
          </div>

          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" noValidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Full name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={orderDetails.full_name}
                    class="form-control"
                    id="fullName"
                    onChange={handleInput}
                    placeholder=""
                    required
                  />
                  {errors.name && (
                <p className="validation-msgs">{errors.name}</p>
              )}
                  <div class="invalid-feedback">
                    Valid full name is required.
                  </div>
                </div>
                {/* <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div> */}
              </div>

              {/* <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div> */}

              <div class="mb-3">
                <label for="address">Full Address</label>
                <textarea
                  type="text"
                  name="address"
                  value={orderDetails.address}
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  onChange={handleInput}
                  required
                />
                {errors.name && (
                <p className="validation-msgs">{errors.address}</p>
              )}
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="mb-3">
                <label for="contact_no">Contact number</label>
                <input
                  type="tel"
                  name="contact_no"
                  value={orderDetails.contact_no}
                  class="form-control"
                  id="contact_no"
                  placeholder="Contact Number"
                  onChange={handleInput}
                />
                {errors.name && (
                <p className="validation-msgs">{errors.contact_no}</p>
              )}
              </div>

              {/* <hr class="mb-4" />
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address" />
                  <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info" />
                  <label class="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr class="mb-4" /> */}

              <h4 class="mb-3">Payment</h4>

              <div class="d-block my-3" onChange={handleInput}>
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    value="Paytm"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    
                    defaultChecked
                    required
                  />
                  <label class="custom-control-label" for="credit">
                    Paytm
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    value="Cash On Delivery"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    
                    required
                  />
                  <label class="custom-control-label" for="debit">
                    Cash On Delivery
                  </label>
                </div>
              </div>

              <hr class="mb-4" />
              <button
                class="btn btn-primary btn-lg btn-block"
                type="button"
                onClick={handleSubmit}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      <CartContainer />
    </>
  );
}

export default OrderNow;
