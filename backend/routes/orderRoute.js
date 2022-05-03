const express = require("express");
const {
  newOrder,
  getSingleOrder,
  getMyOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
  updateOrderStatus,
  updatePaymentStatus
} = require("../controllers/orderController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
// router.route("/order/new").post(newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, getMyOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

  router
  .route("/admin/orderStatus/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrderStatus)
  
  router
  .route("/admin/paymentStatus/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updatePaymentStatus)

module.exports = router;
