const Feedback = require("../models/feedbackModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//create feedback
exports.createFeedback = catchAsyncErrors(async (req, res, next) => {
   const {feedback_email , feedback_message} = req.body;
   const feedback = await Feedback.create({ feedback_email , feedback_message});
    res.status(201).json({
      success: true,
      feedback,
    });
  });

  //view all feedback
  exports.getAllFeedback = catchAsyncErrors(async (req, res) => {
  const feedbacks = await Feedback.find();
    res.status(200).json({
      success: true,
      feedbacks,
    });
  });

  //delete feedback
exports.deleteFeedback = catchAsyncErrors(async (req, res, next) => {
    const delfeedback = await Feedback.findById(req.params.id);
  
    if (!delfeedback) {
      return next(new ErrorHandler("Feedback not found", 500));
    }
  
    await delfeedback.remove();
  
    res.status(200).json({
      success: true,
      message: "Feedback deleted successfully",
    });
  });