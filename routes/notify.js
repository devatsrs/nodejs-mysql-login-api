const express = require("express");
const { check, validationResult } = require("express-validator");

const notifyController = require("../controllers/notify");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// put /user/feedback
router.post(
  "/feedback/chef",
  [
    check("user_id").isInt(),
    check("token").isString(),
    check("title").isString(),
    check("message").isString(),

    check("user_id").trim().not().isEmpty(),
    check("token").trim().not().isEmpty(),
    check("title").trim().not().isEmpty(),
    check("message").trim().not().isEmpty(),
  ],
  isAuth,
  notifyController.feedbackNotifyChef
);

module.exports = router;
