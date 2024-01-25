const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "54321", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
