import React, { Fragment } from "react";
import Navbar from "../../../components/shared/Navbar";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <Fragment>
      <Navbar/>
      <div className="body">
        <div class="contact-form">
          <div class="first-container">
            <div class="info-container">
              <div>
                <h3>Address</h3>
                <p>
                  Banasthali Vidyapith, P.O. Banasthali Vidyapith-304022
                  (Rajasthan)
                </p>
              </div>
              <div>
                <h3>Lets Talk</h3>
                <p>+1 800 1236879</p>
              </div>
              <div>
                <h3>General Support</h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
          <div class="second-container">
            <h2>Send Us A Message</h2>
            <form method="POST" action="mailto:digitalbhojnalaya@gmail.com">
              <div class="form-group">
                <label for="name-input">Tell us your name*</label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="First name"
                  required=""
                />
                <input type="text" placeholder="Last name" required="" />
              </div>
              <div class="form-group">
                <label for="email-input">Enter your email</label>
                <input
                  id="email-input"
                  type="text"
                  placeholder="Eg. example@gmail.com"
                  required=""
                />
              </div>
              <div class="form-group">
                <label for="phone-input">Enter phone number</label>
                <input
                  id="phone-input"
                  type="text"
                  placeholder="Eg. _1800 000000"
                  required=""
                />
              </div>
              <div class="form-group">
                <label for="message-textarea">Message</label>
                <input
                  class="textarea"
                  id="message-textarea"
                  placeholder="Write us a message"
                ></input>
              </div>
              <button class="btn" type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
