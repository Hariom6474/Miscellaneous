const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log('1st middleware');
  next();
});

app.use((req, res, next) => {
  // var value = 10;
  console.log('2nd middleware');
  res.send('<h1>hello from express</h1>');
  // res.send( { key1: value });
});

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000/');
});
