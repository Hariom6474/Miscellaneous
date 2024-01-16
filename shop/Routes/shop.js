const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.get("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
});

module.exports = router;
