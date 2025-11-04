const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  }),
  (req, res) => {
    //if success, redirect to frontend
    res.redirect(`${process.env.CLIENT_URL}/`);
  }
);

// Current session user
router.get("/me", (req, res) => {
  if (!req.user) return res.status(401).json({ user: null });
  const { _id, name, email, avatar } = req.user;
  res.json({ user: { id: _id, name, email, avatar } });
});

// Logout
router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    req.session.destroy((err) => {
      if (err) console.error("Session destroy error:", err);
      res.clearCookie("connect.sid");
      res.json({ ok: true });
    });
  });
});

module.exports = router;
