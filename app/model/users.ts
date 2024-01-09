import { Model, DataTypes } from "sequelize";

import sequelize from "../model/dbconfig";

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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

export default Users;
