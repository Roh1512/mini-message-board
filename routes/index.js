const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  const text = req.body.message;
  const user = req.body.author;
  const added = new Date();
  if (text && user) {
    messages.push({ text: text, user: user, added, added });
  }
  res.redirect("/");
});

module.exports = router;
