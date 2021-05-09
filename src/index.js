const http = require("http");

const routes = require("./routes");

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} on Endpoint: ${request.url}`);

  const route = routes.find(
    (routeObj) =>
      routeObj.method === request.method && routeObj.endpoint === request.url
  );

  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

server.listen(PORT, () => console.log(`listen on port ${PORT}`));
