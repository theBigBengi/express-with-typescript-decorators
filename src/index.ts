import express, { Express } from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";
import "reflect-metadata";

const app: Express = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieSession({ keys: ["laskdjf"] }));
app.use(router);

app.get("/", (req, res) => {
  const html = `
  <h1>Home page<h1>
  <p>
  ${
    req.session && req.session.loggedIn
      ? "You are logged in"
      : "You are NOT logged in"
  }
  </p>
  <a href='/protected'>Protected</a>
  ${
    req.session && req.session.loggedIn
      ? "<a href='/logout'>Logout</a>"
      : "<a href='/login'>Login</a>"
  }
   `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
