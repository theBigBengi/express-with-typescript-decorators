import { Request, Response } from "express";
import { get, controller, use, post, bodyValidator } from "../decorators";
import { requireAuth } from "../middlewares/requiredAuth";

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
    res.render("login");
  }

  @post("/login")
  @bodyValidator("username", "password")
  postLogin(req: Request, res: Response) {
    const { username, password } = req.body;

    if (username === "username" && password === "password") {
      req.session = { loggedIn: true };
      return res.redirect("/");
    } else {
      return res.status(403).send("Invalid username or password");
    }
  }

  @get("/logout")
  @use(requireAuth)
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
