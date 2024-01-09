"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const express_1 = __importDefault(require("../server/express"));
const users_1 = __importDefault(require("../app/model/users"));
const initRoutes = () => {
    express_1.default.get("/", async (_req, res) => {
        const users = await users_1.default.findAndCountAll();
        return res.render("index", { users: users.rows });
    });
    express_1.default.post("/submit", async (req, res) => {
        const user = {
            name: req.body.name,
            age: req.body.age,
        };
        await users_1.default.create(user).then(() => {
            return res.render("userItem", { user });
        });
    });
};
exports.initRoutes = initRoutes;
