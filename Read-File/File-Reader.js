var fs = require("fs");
var filename = "foo.txt";

fs.exists(filename, cbExists);

console.log("Reading File....");

function cbExists(exists){
	if(exists){
		fs.stat(filename, cbStat);
	}
	else{
		console.log(filename + " Not Found");
	}
}

function cbStat(error, stats){
	if(error){
		throw error;
	}
	if(stats.isFile()){
		fs.readFile(filename, "utf8", cbReadFile);
	}
	else{
		console.log(filename + " is not a file.");
	}
}

function cbReadFile(error, data){
	if(error){
		throw error;
	}
	
	console.log(data);	
}

process.on("uncaughtException", function(error){
	console.log("The exception was caught!");
});