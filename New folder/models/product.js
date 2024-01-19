const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../", "data", "products.json");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        try {
          products = JSON.parse(fileContent);
        } catch (err) {
          console.error(err);
        }
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
