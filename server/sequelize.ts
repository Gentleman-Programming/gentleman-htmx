import sequelize from "../app/model/dbconfig";

export const initSequelize = async () => {
  await sequelize.sync({ force: true }).then(async () => {
    console.log("db ready to be used...");
  });
};
