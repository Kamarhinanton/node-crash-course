//file System
const fs = require('fs');
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if(err){
//     throw err
//   }
//
//   console.log('Folder created')
// })
const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJS!', err=> {
//   if(err){
//     throw err
//   }
//
//   console.log('file has been created')
//
//   fs.appendFile(filePath, '\nHello Again', err=> {
//     if(err){
//       throw err
//     }
//
//     console.log('file has been created')
//   })
// })

fs.readFile(filePath, (err, content) => {
  if(err){
    throw err
  }

  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
})
