const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);

server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
