// const chalk = require('chalk');
// const text = require('./data');

// console.log(chalk.blue(text));

// console.log(__dirname);

// console.log(__filename);

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }

  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // } else if (req.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }

  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // }

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

  let ContentType = 'text/html';

  const ext = path.extname(filePath)
  // console.log(filePath)
  if (!ext) {
    filePath += '.html'
  }

  switch (ext) {
    case '.css':
      ContentType = 'text/css'
      break
    case '.js':
      ContentType = 'text/javascript'
      break
    default:
      ContentType = 'text/html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': ContentType
      })
      res.end(content)
    }
  })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});