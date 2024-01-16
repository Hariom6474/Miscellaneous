const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const loginPage = require("./Routes/login");
const messagePage = require("./Routes/message");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginPage);
app.use(messagePage);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
