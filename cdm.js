const fs = require('fs');
const utils = require('./utils');

// //synchronous version of readFile often not recommended, but okay here.
var companies = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

console.log('Company Names:');

var result = '';
if (process.argv[3] === 'locate') {
  utils.getCompaniesByState(companies, process.argv[4]).forEach((company, i, companies) => {
    if (i === companies.length - 1) {
      result += company;  
    } else {
      result += `${company}, `; 
    }
  });
  console.log(result);
}


