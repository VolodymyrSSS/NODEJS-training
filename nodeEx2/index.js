// const http = require('http')

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { 'Content-type': 'text/html' })
//     response.end('Hello World!')
//   })
//   .listen(8080)

// const fs = require('fs')

// fs.writeFileSync('./test.txt', 'Hello Word', 'utf8')

// const content = fs.readFileSync('./test.txt', 'utf8')

// console.log(content)

// fs.writeFileSync('./test.txt', content + 'Hello ', 'utf8')

// console.log(fs.readdirSync('./'))

// fs.renameSync('./test.txt', './test1.txt')

// fs.unlinkSync('./test1.txt')

const http = require('http')
const fs = require('fs')
const url = require('url')

module.exports = () => {

  http
    .createServer(function (request, response) {
      // read file
      // write file
      // GET/logs/from/to
      const {
        pathname,
        query
      } = url.parse(request.url, true)
      if (request.method === 'POST') { // content=abc123&filename=book.txt
        fs.writeFileSync(query.filename, query.content, 'utf8')
      } else {
        fs.readFile(`./files/${pathname}`, (err, content) => {
          if (err) {
            response.writeHead(400, {
              'Content-type': 'text/html'
            })
            response.end(`No file with name "${pathname}" found`)
            return
          }

          response.writeHead(200, {
            'Content-type': 'application/json'
          })
          response.end(JSON.stringify(logs))
        })
      }
    }).listen(8080)

}