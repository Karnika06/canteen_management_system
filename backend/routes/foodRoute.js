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
  .patch(isAuthenticatedUser, authorizeRoles("admin"), updateItem)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteitem);

router.route("/fooditem/:id").get(getItemDetails);

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   });

module.exports = router;
