const path = require("path");

exports.notFound404 = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../', "views", "pnf.html"));
};
