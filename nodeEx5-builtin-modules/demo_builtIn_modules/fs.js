const fs = require('fs');
const path = require('path');

// створення нової папки
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Папка створена');
// });

// створення нового файла
// const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello NodeJS!!!', (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Файл створений');
// });

// додавання нового контенту без перетирання
// const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.appendFile(filePath, '\nHello NodeJS again!', (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Файл створений');
// });

// читання файлу
const filePath = path.join(__dirname, 'test', 'text.txt');
fs.readFile(filePath, 'utf8', (err, content) => {
  if (err) {
    throw err
  }
  // const data = Buffer.from(content); // using global class 'Buffer'
  // console.log('Content: ', data.toString()); // using global class 'Buffer'
  console.log(content);

})