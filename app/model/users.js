const { Model, DataTypes } = require("sequelize");

const sequelize = require("../model/dbconfig");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  },
);

module.exports = Users;
