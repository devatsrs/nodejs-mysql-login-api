const Sequelize = require("sequelize");

const sequelize = new Sequelize("react_login", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
