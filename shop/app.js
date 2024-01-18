const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");
const path = require("path");
const errorController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.notFound404);

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
