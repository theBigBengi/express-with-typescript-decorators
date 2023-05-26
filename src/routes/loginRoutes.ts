import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

/**
 * @description wefrwefewfrewfrwe
 * @see htttp://www.localhost:3000
 */
const router = Router();

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="post">
    <div>
      <label>Username</label>
      <input name="username" />
    </div>
    <div>
      <label>password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit<button/>
  </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { username, password } = req.body;

  if (
    username &&
    password &&
    username === "username" &&
    password === "password"
  ) {
    req.session = { loggedIn: true };
    res.redirect("/");
    return;
  } else {
    res.send("Invalid email or password");
  }

  res.json({ username, password });
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send(`protected route`);
});

export { router };

// GOOGLE_CLIENT_ID = "64449953746-k1u8ojdnk4j4du798nc4ic1krovpkr1s.apps.googleusercontent.com"
// GOOGLE_CLIENT_SECRET = "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"
