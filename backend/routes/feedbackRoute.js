const express = require("express");
const {createFeedback , getAllFeedback , deleteFeedback} = require("../controllers/feedbackController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


router.route("/feedback/new").post(createFeedback);
router.route("/feedbacks").get(getAllFeedback);
router.route("/feedbackDelete/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteFeedback);
//router.route("/feedbackDelete/:id").delete( deleteFeedback);
module.exports = router;
