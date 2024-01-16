const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/home", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) data = "No Chat Exists";
    res.send(`${data}
    <form action="/home" method="POST" onSubmit='document.getElementById("username").value = localStorage.getItem("username")'>
    <input type="text" placeholder="Message" name="message" id="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">Send</button>
    </form>`);
  });
});

router.post("/home", (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFile("./message.txt", ` ${req.body.username}: ${req.body.message}`, { flag: "a" }, (err) => {
      err ? console.log(err) : res.redirect("/home");
    });
});

module.exports = router;
