const Food = require("../models/foodModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//create food item (ADMIN)
exports.createItem = catchAsyncErrors(async (req, res, next) => {
  
 
  req.body.user = req.user.id;

  const fooditem = await Food.create(req.body);

  res.status(201).json({
    success: true,
    fooditem,
  });
});

//get all food items
exports.getAllItems = catchAsyncErrors(async (req, res) => {
  const resultsPerPage = 50;

  const fooditemCount = await Food.countDocuments();

  const apiFeature = new ApiFeatures(Food.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);

  const fooditems = await apiFeature.query;

  res.status(200).json({
    success: true,
    fooditems,
  });
});

//update food item (ADMIN)
exports.updateItem = catchAsyncErrors(async (req, res, next) => {
  let fooditem = await Food.findById(req.params.id);

  if (!fooditem) {
    return next(new ErrorHandler("Food item not found", 500));
  }

  fooditem = await Food.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    fooditem,
  });
});

//delete food item
exports.deleteitem = catchAsyncErrors(async (req, res, next) => {
  const fooditem = await Food.findById(req.params.id);

  if (!fooditem) {
    return next(new ErrorHandler("Food item not found", 500));
  }

  await fooditem.remove();

  res.status(200).json({
    success: true,
    message: "Food item deleted successfully",
  });
});

//get item details
exports.getItemDetails = catchAsyncErrors(async (req, res, next) => {
  const fooditem = await Food.findById(req.params.id);

  if (!fooditem) {
    return next(new ErrorHandler("Food item not found", 404));
  }

  res.status(200).json({
    success: true,
    fooditem,
    //fooditemCount
  });
});
