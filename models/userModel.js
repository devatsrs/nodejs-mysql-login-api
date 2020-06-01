const UserAuthToken = require("../models/schema/userauthtokens");

module.exports = class UserModel {
  static isLoggedIn(id) {
    return new Promise((resolve, reject) => {
      UserAuthToken.findOne({ where: { uerId: id } }).then((result) => {
        if (!result) {
          reject();
        } else {
          resolve(true);
        }
      });
    });
  }
};
