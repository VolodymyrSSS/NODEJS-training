// using child process with exec

const cp = require('child_process');

// to open something
// cp.exec('open http://www.linkedin.com/learning');
// cp.exec('open -a Terminal .');
// cp.exec('ls', (err, data) => {
//   if(err) {
//     throw err;
//   }
//   console.log(data);
// });

// to execute external system command
cp.exec('node readStream', (err, data, stderr) => {
  console.log(data);
});



