var cp = require("child_process");
var child;
 
child = cp.fork(__dirname + "/child", ["-foo"], {
  cwd: "/",
  env: {
    bar: "baz"
  }
});