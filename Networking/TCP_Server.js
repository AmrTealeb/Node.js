var net = require("net");
var server = net.createServer({
  allowHalfOpen: false
}, function(socket) {
	socket.end("Hello and Goodbye!\n");
	server.close();
  // handle connection
});
 
server.listen(8000, "127.0.0.1", function() {
  var address = server.address();
 
  console.log("Listening on port " + address.port);
}); 

server.on("close", function() {
  console.log("And now it's closed.");
});
 