var cp = require("child_process");
 
cp.exec("dir", function(error, stdout, stderr) {
  if (error) {
    console.error(error.toString());
  } else if (stderr !== "") {
    console.error(stderr);
  } else {
    console.log(stdout);
  }
});
 