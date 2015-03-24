var http = require("http");
var connect = require("connect");
var app = connect();
var WebSocketServer = require("ws").Server;
var server;
var wsServer;
//app.use(connect.static("public"));
server = http.createServer(app);
wsServer = new WebSocketServer({
  server: server
});
wsServer.on("connection", function(ws) {
  ws.on("message", function(message, flags) {
	console.log("Client Says : " + message);
    ws.send(message, flags);
  });
});
server.listen(8000);