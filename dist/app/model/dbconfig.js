"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const persistent_path = process.env.PERSISTENT_STORAGE_DIR || ".";
const sequelize = new sequelize_1.Sequelize("gentleman-db", "user", "pass", {
    dialect: "sqlite",
    host: persistent_path + "/dev.sqlite",
});
exports.default = sequelize;
