exports.getCompaniesByState = (companies, state) => {
  return companies.filter((company) => {
    if (company.state === state) {
      return true;
    }
  }).map((company) => {
    return company.company_name;
  });
};

exports.getCompaniesByYear = (companies, year, flag) => {
  return companies.filter((company) => {
    if (flag === 'find_before') {
      return company.year_founded < year;
    } else {
      return company.year_founded > year;
    }
  }).map((company) => {
    return company.company_name;
  });
};

exports.getCompaniesByEmployeeRange = (companies, range) => {
  return companies.filter((company) => {
    return company.full_time_employees === range;
  }).map((company) => {
    return company.company_name;
  });
};

exports.getCompaniesByType = (companies, type) => {
  return companies.filter((company) => {
    return company.company_category === type;
  }).map((company) => {
    return company.company_name;
  });
};

//Format company results. 10 per row.
exports.format = (companies) => {
  var result = '';
  companies.forEach((company, i, companies) => {
    if (i === companies.length - 1) { //dont add trailing comma for last result
      result += company;
    } else {
      result += `${company}, `;
    }
    if ((i + 1) % 10 === 0) {
      result += '\n';
    }
  });
  return result + '\n';
};