// app/main.ts
var import_child_process = require("child_process");
var command = (0, import_child_process.execSync)("env", {
  env: process.env,
  shell: "/bin/jsh"
});
console.log(command.toString());
