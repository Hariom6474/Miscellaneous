const path = require('path');

exports.getAddProduct = (req, res, next) => {
  // no input because of get request
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  // this will run on POST request only
  console.log(req.body);
  res.redirect("/");
};

exports.getHome = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};

exports.getContact = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};

exports.getSuccess = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
};
