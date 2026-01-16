const express = require("express");
const jwt = require("jsonwebtoken");
const { projects } = require("./data");

const router = express.Router();
const SECRET = "secretkey";

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(403);
  req.user = jwt.verify(token, SECRET);
  next();
}

router.post("/project", auth, (req, res) => {
  const project = {
    id: Date.now(),
    user: req.user.email,
    prompt: req.body.prompt
  };
  projects.push(project);
  res.json(project);
});

router.post("/message", auth, async (req, res) => {
  const reply = `Mock AI response for: ${req.body.message}`;
  res.json({ reply });
});

module.exports = router;
