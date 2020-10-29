const fs = require('fs');

// to rename a file
fs.renameSync('./assets/colors.json', './assets/colorData.json');

// to move a file into another directory async
fs.rename('./assets/notes.md', './storage-files/notes.md', err => {
  if(err) {
    throw err;
  }
});

// to delete Volodymyr.jpg after 4 sec
// setTimeout(() => {
//   fs.unlinkSync('./assets/Volodymyr.jpg');
// }, 4000);