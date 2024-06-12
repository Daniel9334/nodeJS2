const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

// Route for user login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user)
    return res.status(403).json({ message: "Invalid username or password" });

  const token = jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = router;
