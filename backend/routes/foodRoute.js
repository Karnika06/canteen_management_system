const express = require("express");
const {
  getAllItems,
  createItem,
  updateItem,
  deleteitem,
  getItemDetails,
} = require("../controllers/foodController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/fooditems").get(getAllItems);

router.route("/admin/fooditem/new").post(isAuthenticatedUser, authorizeRoles("admin"), createItem);

router
  .route("/admin/fooditem/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateItem)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteitem);

router.route("/fooditem/:id").get(getItemDetails);

module.exports = router;
