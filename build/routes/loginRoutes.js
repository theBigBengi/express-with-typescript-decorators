"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
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
const router = (0, express_1.Router)();
exports.router = router;
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/login", (req, res) => {
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
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username &&
        password &&
        username === "username" &&
        password === "password") {
        req.session = { loggedIn: true };
        res.redirect("/");
        return;
    }
    else {
        res.send("Invalid email or password");
    }
    res.json({ username, password });
});
router.get("/protected", requireAuth, (req, res) => {
    res.send(`protected route`);
});
// GOOGLE_CLIENT_ID = "64449953746-k1u8ojdnk4j4du798nc4ic1krovpkr1s.apps.googleusercontent.com"
// GOOGLE_CLIENT_SECRET = "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"
