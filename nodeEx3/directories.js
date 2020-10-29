const fs = require('fs');

// to rename a directory
fs.renameSync('./storage-files', './storage');

// to remove files in directory
// fs.readdirSync('./storage').forEach(fileName => {
//   fs.unlinkSync(`./storage/${fileName}`);
// });

// to remove(delete) a directory
// fs.rmdir('./storage', err => {
//   if(err) {
//     throw err;
//   }
//   console.log('./storage directory removed');
// });