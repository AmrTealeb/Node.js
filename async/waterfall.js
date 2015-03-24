var async = require("async");

async.waterfall([
	function(callback){
		var a = Math.random();
		var b = Math.random();
		console.log("a = " + a);
		console.log("b = " + b);
		callback(null, a, b);
	},
	function(a, b, callback){
		callback(null, a * a + b * b);
	},
	function(cc, callback){
		callback(null, Math.sqrt(cc));
	}
], function(error, c){
	console.log(c);
});