const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { users } = require("./data");

const router = express.Router();
const SECRET = "secretkey";

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 8);
  users.push({ email, password: hashed });
  res.json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if (!user) return res.status(401).send("User not found");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).send("Invalid password");

  const token = jwt.sign({ email: user.email }, SECRET);
  res.json({ token });
});

module.exports = router;
