const Order = require("../models/schema/order");
const UserModel = require("../models/userModel");
const UserAuthToken = require("../models/schema/userauthtokens");

const { check, validationResult } = require("express-validator");

const chef = require("../helper/chef");

exports.feedbackNotifyChef = (req, res, next) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const title = req.body.title;
  const message = req.body.message;
  const token = req.body.token;
  const user_id = req.body.user_id;

  /*UserAuthToken.findOne({ where: { uerId: user_id } }).then((reult) => {
    res.status(200).json({ message: "Feedback sent!" });
  });*/
  // only send notificatin when user is logged in.p

  UserModel.isLoggedIn(user_id)
    .then((result) => {
      chef
        .send_notification(title, message, token)
        .then(() => {
          res.status(200).json({ message: "Feedback sent!" });
        })
        .catch((err) => {
          return res.status(422).json({
            errors: "Unable to send notification with given device token!",
          });
        });
    })
    .catch((err) => {
      return res.status(422).json({ errors: "No user found" });
    });
};
