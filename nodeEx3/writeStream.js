// writable file streams

// process.stdout.write('hello');
// process.stdout.write(' World\n');

const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8');

// writeStream.write('Sample\n');
// writeStream.write(' to write file stream!\n');

// process.stdin.on('data', data => {
//   writeStream.write(data);
// }); // type in terminal - will be written in myFile.txt

// copy text from lorum-ipsum.md to myFile.txt
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');
// readStream.on('data', data => {
//   writeStream.write(data);
// });

// variant2
readStream.pipe(writeStream);