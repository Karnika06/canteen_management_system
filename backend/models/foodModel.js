const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  
  food_name: {
    type: String,
    required: [true, "Please enter food name"],
    trim: true
  },
  food_description: {
    type: String,
    required: [true, "Please enter food description"],
  },
  food_price: {
    type: Number,
    required: [true, "Please enter food price"],
    maxlength: [8, "Price cannot exceed 8 characters"],
  },
  food_images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  canteen_name: {
    type: String,
    required: [true, "Please enter canteen name"],
  },
  food_quantity: {
    type: Number,
    required: [true, "Please enter food quantity"],
    maxlength: [3, "Stock cannot exceed 3 characters"],
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  food_itemId: {
    type: String,
    required: [true, "Please enter category of food"]
  }
});

module.exports = mongoose.model("Food", foodSchema);