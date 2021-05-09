const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });
  response.end("<h1>Ola Mundo</h1>");
});

server.listen(PORT, () => console.log(`listen on port ${PORT}`));
