"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSequelize = void 0;
const sequelize = require("../app/model/dbconfig");
const initSequelize = async () => {
    await sequelize.sync({ force: true }).then(async () => {
        console.log("db ready to be used...");
    });
};
exports.initSequelize = initSequelize;
