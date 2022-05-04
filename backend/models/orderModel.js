const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  items: [
    {
      food_name: {
        type: String,
        required: true,
      },
      food_price: {
        type: String,
        required: true,
      },
      qty: {
        type: String,
        required: true,
      },
      food_image: {
        type: String,
        required: true,
      },
      _id: {
        type: mongoose.Schema.ObjectId,
        ref: "Food",
         required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  userEmail:{
    type: String,
    required: true
  },
  contact_no: {
    type: Number,
    required: [true, "Please enter your contact number"],
    maxlength: [10, "Contact number cannot exceed 10 characters"],
    minlength: [10, "Contact number cannot be less than 10 characters"],
  },
  address:{
    type: String,
    required: true
  },
  paymentInfo: {
    pay_id: {
      type: String,
      // required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true
  },
  // itemsPrice: {
  //   type: Number,
  //   default: 0,
  //   required: true,
  // },
  // taxPrice: {
  //   type: Number,
  //   default: 0,
  //   required: true,
  // },
  totalPrice: {
    type: Number,
    default: 0,
    required: true,
  },
  paymentStatus:{
    type:String,
    required: true,
    default: "Unpaid"
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  // deliveredAt: Date,
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("Order", orderSchema);