const Order = require("../models/schema/order");
const UserModel = require("../models/userModel");

const { check, validationResult } = require("express-validator");

const chef = require("../helper/chef");

exports.order = (req, res, next) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const plat_id = req.body.plat_id;
  const qty = req.body.qty;
  const user_id = req.body.user_id;

  //1. check if basket has entry if not insert and return basket id
  //2. once basket is created insert basket items into basketitems table.
  //

  const order = new Order({
    plat_id: plat_id,
    qty: qty,
    user_id: user_id,
  });

  order
    .save()
    .then((result) => {
      // only send notificatin when user is logged in.
      if (UserModel.isLoggedIn(user_id)) {
        chef.send_order_notification(order);
      }

      res.status(200).json({ message: "Order created!" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
