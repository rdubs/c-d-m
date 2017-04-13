const fs = require('fs');
const utils = require('./utils');

const args = process.argv;

// //synchronous version of readFile often not recommended, but okay here.
var companies = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

var results;
if (args[3] === 'locate') {
  results = utils.getCompaniesByState(companies, process.argv[4]);
} else if (args[3] === 'find_before' || args[3] === 'find_after') {
  var year = parseInt(args[4]);
  results = utils.getCompaniesByYear(companies, year, args[3]);
} else {

}

//console output
console.log('Company Names:');
console.log(utils.format(results));
console.log(`Number of Companies: ${results.length}`);




