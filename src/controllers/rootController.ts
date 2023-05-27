import { Request, Response } from "express";
import { get, controller, use } from "../decorators";
import { requireAuth } from "../middlewares/requiredAuth";

@controller("")
export class LoginController {
  @get("/")
  getRoot(req: Request, res: Response) {
    res.render("home", { session: req.session?.loggedIn });
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.render(`protected`);
  }
}
