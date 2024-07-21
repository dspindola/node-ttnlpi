// app/main.ts
import { execSync } from "child_process";
var command = execSync("env", {
  env: process.env,
  shell: "/bin/jsh"
});
console.log(command.toString());
