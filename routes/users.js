const express = require("express");
const { check, validationResult } = require("express-validator");

const userController = require("../controllers/user");
const isAuth = require("../middleware/is-auth");

const Plat = require("../models/schema/plat");
const User = require("../models/schema/user");

const router = express.Router();

// put /user/feedback
router.put(
  "/order",
  [
    check("plat_id")
      .isInt()
      .custom((value, { req }) => {
        return Plat.findOne({ where: { id: value } }).then((result) => {
          if (!result) {
            return Promise.reject("Plat is not found!");
          }
        });
      }),
    check("user_id")
      .isInt()
      .custom((value, { req }) => {
        return User.findOne({ where: { id: value } }).then((result) => {
          if (!result) {
            return Promise.reject("User is not found!");
          }
        });
      }),
    check("plat_id").trim().not().isEmpty(),
    check("user_id").trim().not().isEmpty(),
  ],
  isAuth,
  userController.order
);

module.exports = router;
