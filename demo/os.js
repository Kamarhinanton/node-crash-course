const os = require('os');

console.log('OS:', os.platform())
console.log('Arch processor:', os.arch())
console.log('Info processor:', os.cpus())
console.log('Free memory:', os.freemem())