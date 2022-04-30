const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  logout,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/password/reset/:token").put(resetPassword);

router.route("/password/forgot").post(forgotPassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);

router.route("/me/update").put(isAuthenticatedUser, updateUserProfile);

// router
//   .route("/admin/users")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router
  .route("/admin/users")
  .get( getAllUsers);

// router
//   .route("/admin/user/:id")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

  router
  .route("/admin/user/:id")
  .get( getSingleUser)
  .put( updateUserRole)
  .delete( deleteUser);

module.exports = router;
