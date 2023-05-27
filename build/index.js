"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const AppRouter_1 = require("./AppRouter");
require("reflect-metadata");
require("./controllers/LoginController");
require("./controllers/rootController");
const app = (0, express_1.default)();
const port = process.env.PORT || 7000;
const appRouter = AppRouter_1.AppRouter.getInstance;
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cookie_session_1.default)({ keys: ["cookiesession"] }));
app.use(appRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
