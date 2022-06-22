const path = require('path')
const http = require('http');
const user = require('./user')


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
 // console.log(http.STATUS_CODES);
  // const dir = path.dirname(__filename)
  // console.log(dir)
   console.log(user.details.age)
});