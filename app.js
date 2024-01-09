const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  let resText = "Welcome to my Node Js project";
  const url = req.url;
  if (url === "/home") {
    resText = "Welcome home";
  } else if (url === "/about") {
    resText = "Welcome to About Us page";
  } else if (url === "/node") {
    resText = "Welcome to my Node Js project";
  }
  res.setHeader("Content-Type", "text.html");
  res.write(resText);
  res.end();
  // process.exit(); // It stops the server from running.
});

server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
