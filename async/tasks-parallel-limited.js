var async = require("async");

var task1 = function(callback){ 
	setTimeout(function(){
		console.log("Task 1");		
		var res = {};
		res.Name = 'name'; 
		callback(null, res);
	}, 300);	
}

var task2 = function(callback){
	setTimeout(function(){
		console.log("Task 2");		
		callback(null, 2);
	}, 200);
}

var task3 =  function(callback){
	setTimeout(function(){
		console.log("Task 3");		
		callback(null, 3);
	}, 100);
}	

async.parallelLimit({one: task1, two: task2, three: task3}, 2, function(error, results){
	if(error){
		console.log(error.toString());
	}
	else{
		console.log(results);
	}
});