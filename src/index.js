const http = require("http");

const users = require("./mocks/user");

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} on Endpoint: ${request.url}`);

  if (request.url === "/users" && request.method === "GET") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

server.listen(PORT, () => console.log(`listen on port ${PORT}`));
