var companies = require('./testData.json');
var utils = require('../utils');

var expect = require('chai').expect;
 
describe('locate', function () {
  it('should return all companies in a given state', function () {
    var res = utils.getCompaniesByState(companies, 'CA');
    expect(res).to.eql(['Archimedes Inc.', 'Credit Karma', 'Embark']);
  });
});

describe('find_before', function () {
  it('should return all companies founded before a given year', function () {
    var res = utils.getCompaniesByYear(companies, 1978, 'find_before');
    expect(res).to.eql(['CGI', 'Equifax', 'Municode']);
  });
});

describe('find_after', function () {
  it('should return all companies founded after a given year', function () {
    var res = utils.getCompaniesByYear(companies, 2006, 'find_after');
    expect(res).to.eql(['First Fuel Software', 'Credit Karma', 'DataWeave', 'Embark']);
  });
});

describe('find_employees_in_range', function () {
  it('should return all companies whose employee range matches the provided employee range', function () {
    var res = utils.getCompaniesByEmployeeRange(companies, '1-10');
    expect(res).to.eql(['DataWeave', 'Embark']);
  });
});

describe('find_company_type', function () {
  it('should return all companies whose type matches the provided company type', function () {
    var res = utils.getCompaniesByType(companies, 'Transportation');
    expect(res).to.eql(['Embark']);
  });
});