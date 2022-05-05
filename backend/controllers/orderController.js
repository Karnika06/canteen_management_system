const Order = require("../models/orderModel");
const Food = require("../models/foodModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create new order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  // const { items, paymentInfo, itemsPrice, taxPrice, totalPrice } = req.body;
  const { full_name,items, userEmail, contact_no,paymentMethod, address,paymentInfo, totalPrice } = req.body;

  const order = await Order.create({
    full_name,
    items,
    userEmail,
    paymentInfo,
    paymentMethod,
    contact_no, address,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

//get single order details
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email contact_no"
  );

  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//get logged in user order
exports.getMyOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

//get all orders (ADMIN)
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

//Update Order Status (ADMIN)
exports.updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
  const orderStatusData = {
  
    orderStatus: req.body.orderStatus,
  };

  const order = await Order.findByIdAndUpdate(req.params.id, orderStatusData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!order) {
    return next(
      new ErrorHandler(`Order does not exist with id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
  });
});

//Update Payment Status (ADMIN)
exports.updatePaymentStatus = catchAsyncErrors(async (req, res, next) => {
  const paymentStatusData = {
  
    paymentStatus: req.body.paymentStatus,
  };

  const payment = await Order.findByIdAndUpdate(req.params.id, paymentStatusData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!payment) {
    return next(
      new ErrorHandler(`Order does not exist with id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
  });
});

//update order status (ADMIN)
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order"));
  }

  order.items.forEach(async (order) => {
    await updateStock(order._id, order.qty);
  });

  order.orderStatus = req.body.orderStatus;

  // if (req.body.orderStatus === "Delivered") {
  //   order.deliveredAt = Date.now();
  // }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

//update stock
async function updateStock(id, quantity) {
  const fooditem = await Food.findById(id);

  fooditem.food_quantity -= quantity;

  await fooditem.save({ validateBeforeSave: false });
}

//delete order
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});

exports.cancelOrder = catchAsyncErrors(async (req, res, next) => {
  const cancelOrd = {
  
    orderStatus: req.body.orderStatus,
  };

  const cancel = await Order.findByIdAndUpdate(req.params.id, cancelOrd, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!cancel) {
    return next(
      new ErrorHandler(`Order does not exist with id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
  });
})