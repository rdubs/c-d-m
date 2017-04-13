const fs = require('fs');

//synchronous version of readFile often not recommended, but okay here.
var companies = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));


// print process.argv
// process.argv.forEach(function (val, index, array) {
//   //skip 'node' argument and program name argument
//   if (index === 0 || index === 1) {
//     return;
//   }
//   console.log(index + ': ' + val);
// });