const path = require('path');

console.log('File Name: ', path.basename(__filename))
console.log('Folder Name: ', path.dirname(__filename))
console.log('Ex: ', path.extname(__filename))
console.log('Parse: ', path.parse(__filename).name)