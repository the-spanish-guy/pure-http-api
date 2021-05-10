const http = require("http");
const url = require("url");

const routes = require("./routes");

const PORT = 3000;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  console.log(
    `Request method: ${request.method} on Endpoint: ${parsedUrl.pathname}`
  );

  let { pathname } = parsedUrl;
  let id = null;

  const splitEndpoint = pathname.split("/").filter(Boolean);
  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === pathname && routeObj.method === request.method
  );

  if (route) {
    request.query = parsedUrl.query;
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "Content-type": "application/json" });
      response.end(JSON.stringify(body));
    };

    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(PORT, () => console.log(`listen on port ${PORT}`));
