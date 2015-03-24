var async = require("async");
var i = 0;
 
async.whilst(function() {
  return i < 5;
}, function(callback) {
  setTimeout(function() {
    console.log("i = " + i);
    i++;
    callback(null);
  }, 1000);
}, function(error) {
  console.log("Done!");
});