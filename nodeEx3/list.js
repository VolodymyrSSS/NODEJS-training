const fs = require('fs');


// to read the content of the directory synchronously
// console.log('started reading files');
// const files = fs.readdirSync('./assets');
// console.log('completed');
// console.log(files); // [ 'Readme.md', 'Volodymy.jpg', 'colors.json' ]

// to read the content of the directory async
fs.readdir('./assets', (err, files) => {
  if(err){
    throw err;
  }
  console.log('completed');
  console.log(files); // [ 'Readme.md', 'Volodymy.jpg', 'colors.json' ]
});
console.log('started reading files');


// to read the context of the file synchronously
// const text = fs.readFileSync('./assets/Readme.md', 'UTF-8');
// console.log(text);

// to read the context of the text-file async
fs.readFile('./assets/Readme.md', 'UTF-8', (err, text) => {
  console.log('file contents read');
  console.log(text);
});

// to read the context of the jpg-file (binary) async
fs.readFile('./assets/Volodymyr.jpg', (err, img) => {
  if(err){
    console.log(`An error has occurred: ${err.message}`);
    process.exit();
  }
  console.log('file contents read');
  console.log(img);
});
