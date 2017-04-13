exports.getCompaniesByState = (companies, state) => {
  return companies.filter((company) => {
    if (company.state === state) {
      return true;
    }
  }).map((company) => {
    return company.company_name;
  });
};