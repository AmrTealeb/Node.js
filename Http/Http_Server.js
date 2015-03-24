var http = require("http");
http.createServer(function(request, response) {
  console.log(request.headers);
  response.setHeader("Content-Type", "text/html");
  response.write("Hello <strong>HTTP</strong>!");
  response.end();
}).listen(8000);