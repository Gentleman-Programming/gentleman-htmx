"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initRoutes_1 = require("./server/initRoutes");
const sequelize_1 = require("./server/sequelize");
try {
    (0, sequelize_1.initSequelize)();
    (0, initRoutes_1.initRoutes)();
}
catch (e) {
    console.log("Error initializing the app", e);
}
