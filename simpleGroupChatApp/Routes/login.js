const express = require("express");
const fs = require("fs");
const router = express.Router();

router.use("/login", (req, res, next) => {
  res.send(`
      <form action="/home" method="POST" onsubmit='localStorage.setItem("username", document.getElementById("username").value)'>
        <input type="text" name="username" placeholder="Username" id="username">
        <button type="submit">Login</button>
      </form>
    `);
  res.redirect("/home");
});

module.exports = router;
