const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/admin/add-product", (req, res, next) => {
  // no input because of get request
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  // this will run on POST request only
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
