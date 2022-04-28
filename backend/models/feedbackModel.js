const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({

    // feedback_name: {
    //     type: String,
    //     required: [true, "Please enter your name"],
    //     trim: true
    //   },
      feedback_email: {
        type: String,
        required: [true, "Please enter your email id"],
        trim: true
      },
      feedback_message: {
        type: String,
        required: [true, "Please enter your feedback"],
        trim: true
      },
      feedback_date : {
          type : Date,
          default : Date.now
      }
      
});

module.exports = mongoose.model("Feedback", feedbackSchema);