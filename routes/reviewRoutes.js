const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authentication");

const {
  createReview,
  getAllReviews,
  getSingleReviews,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

router.route("/").post(authenticateUser, createReview).get(getAllReviews);
router
  .route("/:id")
  .get(getSingleReviews)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);

module.exports = router;
