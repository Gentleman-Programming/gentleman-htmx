const { Sequelize } = require("sequelize");

const persistent_path = process.env.PERSISTENT_STORAGE_DIR || ".";

const sequelize = new Sequelize("gentleman-db", "user", "pass", {
  dialect: "sqlite",
  host: persistent_path + "/dev.sqlite",
});

module.exports = sequelize;
