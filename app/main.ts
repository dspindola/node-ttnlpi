import { execSync } from 'child_process';

const command = execSync('env', {
  env: process.env,
  shell: '/bin/jsh',
});

console.log(command.toString());
