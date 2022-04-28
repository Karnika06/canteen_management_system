const express = require("express");
const {createFeedback , getAllFeedback , deleteFeedback} = require("../controllers/feedbackController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


router.route("/feedback/new").post(createFeedback);
router.route("/feedbacks").get(getAllFeedback);
router.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteFeedback);
module.exports = router;
