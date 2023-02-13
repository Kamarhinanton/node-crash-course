// const chalk = require('chalk');
//
// console.log(chalk.blue('Hello NodeJS'));
// console.log(__filename);

const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) =>{

  if(req.url === '/'){
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if(err){
        throw err
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(data)
    })
  } else if(req.url === '/content'){
    fs.readFile(path.join(__dirname, 'public', 'content.html'), (err, data) => {
      if(err){
        throw err
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(data)
    })
  }
})

server.listen(3000, ()=> {
  console.log('Server has been start...')
})