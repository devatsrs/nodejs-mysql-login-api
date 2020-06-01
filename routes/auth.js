const express = require("express");
const { check, validationResult } = require("express-validator");

const User = require("../models/schema/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.put(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ where: { email: value } }).then((userDoc) => {
          if (userDoc !== null) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    check("password").trim().isLength({ min: 5 }),
    check("name").trim().not().isEmpty(),
  ],
  authController.signup
);

router.post("/login", authController.login);

module.exports = router;
