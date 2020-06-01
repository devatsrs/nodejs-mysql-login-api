const Sequelize = require("sequelize");

//const sequelize = new Sequelize("jimmy_mobile_app", "root", "root", {
const sequelize = new Sequelize("cheffy", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
