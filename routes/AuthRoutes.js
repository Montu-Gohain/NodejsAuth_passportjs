const { Router } = require("express");
const User = require("../models/userModel");
const router = Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  let newUser = new User({
    username,
    password,
  });
  const saved_user = await newUser.save();
  res.status(201).send({
    success: true,
    data: saved_user,
  });
});

router.post("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.send("Logout Route");
});
router.get("/protected", (req, res) => {
  res.send("protected Route");
});

module.exports = router;
