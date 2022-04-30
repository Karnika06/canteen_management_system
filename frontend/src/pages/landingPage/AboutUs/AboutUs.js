import React, { Fragment } from "react";
import Navbar from "../../../components/shared/Navbar";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />
      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h4>
                <span>Digital</span> Bhojnalaya{" "}
              </h4>
              <p>
                Our technology platform connects customers, restaurant partners.
                It helps the canteen manager to manage the restaurant more
                effectively and efficiently by computerizing meal ordering and
                billing. The system processes transactions and stores the
                resulting data that will help the manager generate reports in
                order to make appropriate decisions for the canteen.
                Implementing this system will lead to hiring less waiters and
                creating an opportunity to appoint more chefs and better kitchen
                places to serve food faster.
              </p>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_one">
                  <i class="fa-solid fa-utensils"></i>
                </span>
                <h6>Food</h6>
                <p>
                  You will have the best quality of food here with awesome
                  taste.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_two">
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <h6>Cart</h6>
                <p>
                  You can easily add your food to the cart to order and enjoy
                  your meal.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_three">
                  <i class="fa-solid fa-file"></i>
                </span>
                <h6>Policy</h6>
                <p>
                  Customer can cancel the order within 20minutes of ordering the
                  food.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_four">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <h6>Toll Free No.</h6>
                <p>Our toll free no. is +91 8708053344</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_five">
                  <i class="fa-solid fa-credit-card"></i>
                </span>
                <h6>Payment</h6>
                <p>Customer can pay via COD or using Paytm.</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_six">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <h6>Email</h6>
                <p>Our official email id is digitalbhojnalaya@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
