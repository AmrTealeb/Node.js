var async = require("async");

var total = 0;
var queue = async.queue(function(task, callback){
	
	//process the task argument
	console.log(task);
	total += task.id;
	console.log("Total = " + total);
	callback(null);
}, 4);

var i = 0;
 
setInterval(function() {
  queue.push({
    id: i
  }, function(error) {
    console.log("Finished a task");
  });
  i++;
}, 200);

queue.saturated = function() {
  console.log("Queue is saturated");
};
 
queue.empty = function() {
  console.log("Queue is empty");
};
 
queue.drain = function() {
  console.log("Queue is drained");
};