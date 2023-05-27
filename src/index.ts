import express, { Express } from "express";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "reflect-metadata";

import "./controllers/LoginController";
import "./controllers/rootController";

const app: Express = express();
const port = process.env.PORT || 7000;

const appRouter = AppRouter.getInstance;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieSession({ keys: ["cookiesession"] }));
app.use(appRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
