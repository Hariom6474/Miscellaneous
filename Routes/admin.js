const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {  // no input because of get request
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  // this will run on POST request only
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;