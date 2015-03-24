var net = require("net");
var client = net.connect(8000, "localhost", function() {
  console.log("Connection established");
});
 