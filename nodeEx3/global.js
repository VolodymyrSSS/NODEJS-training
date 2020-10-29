// console.log(__dirname); // give a directory name and shows the full path to it
// console.log(__filename); // give access to filename and shows the full path to it

const path = require('path');

console.log(`The file name is ${path.basename(__filename)}`); // give access to filename only