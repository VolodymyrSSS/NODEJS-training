// using child process with spawn

const cp = require('child_process');

const questionApp = cp.spawn('node', ['questions2.js']);

questionApp.stdin.write('Volodymyr \n');
questionApp.stdin.write('Kyiv \n');
questionApp.stdin.write('Change the world \n');

questionApp.stdout.on('data', data => {
  console.log(`from the question2 app ${data}`);
});
questionApp.on('close', () => {
  console.log(`questionApp process exited`);
});