const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
