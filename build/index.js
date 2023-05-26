"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const cookie_session_1 = __importDefault(require("cookie-session"));
require("reflect-metadata");
const app = (0, express_1.default)();
const port = process.env.PORT || 7000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cookie_session_1.default)({ keys: ["laskdjf"] }));
app.use(loginRoutes_1.router);
app.get("/", (req, res) => {
    const html = `
  <h1>Home page<h1>
  <p>
  ${req.session && req.session.loggedIn
        ? "You are logged in"
        : "You are NOT logged in"}
  </p>
  <a href='/protected'>Protected</a>
  ${req.session && req.session.loggedIn
        ? "<a href='/logout'>Logout</a>"
        : "<a href='/login'>Login</a>"}
   `;
    res.send(html);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
