const Sequelize = require("sequelize");

const sequelize = require("../../util/database");

module.exports = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "name",
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
    unique: true,
    field: "email",
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "password",
  },
  countryCode: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "country_code",
  },
  phoneNo: {
    type: Sequelize.STRING(255),
    allowNull: true,
    unique: true,
    field: "phone_no",
  },
  locationLat: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: "location_lat",
  },
  locationLon: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: "location_lon",
  },
  userType: {
    type: Sequelize.ENUM("pending", "user", "chef", "admin", "driver"),
    allowNull: true,
    field: "user_type",
  },
  imagePath: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "imagePath",
  },
  authToken: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "auth_token",
  },
  restaurantName: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "restaurant_name",
  },
  passwordResetToken: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "password_reset_token",
  },
  verificationEmailToken: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "verification_email_token",
  },
  verificationEmailStatus: {
    type: Sequelize.ENUM("pending", "verified"),
    allowNull: true,
    defaultValue: "pending",
    field: "verification_email_status",
  },
  verificationPhoneToken: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "verification_phone_token",
  },
  verificationPhoneStatus: {
    type: Sequelize.ENUM("pending", "verified"),
    allowNull: true,
    defaultValue: "pending",
    field: "verification_phone_status",
  },
  status: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: "status",
  },
  userIp: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "user_ip",
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: "createdAt",
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: "updatedAt",
  },
  stripeId: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "stripe_id",
  },
  providerUserId: {
    type: Sequelize.STRING(255),
    allowNull: true,
    defaultValue: "0",
    field: "provider_user_id",
  },
  provider: {
    type: Sequelize.STRING(255),
    allowNull: true,
    defaultValue: "0",
    field: "provider",
  },
  promotionalContent: {
    type: Sequelize.INTEGER(1),
    allowNull: true,
    defaultValue: "0",
    field: "promotionalContent",
  },
  deviceId: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "device_id",
  },
  deviceRegistrationToken: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "device_registration_token",
  },
  orderFlag: {
    type: Sequelize.INTEGER(1),
    allowNull: true,
    defaultValue: "1",
    field: "order_flag",
  },
});
