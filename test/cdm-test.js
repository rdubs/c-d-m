var foo = require('../foo');
var companies = require('./testData.json');
var utils = require('../utils');

var expect = require('chai').expect;
 
describe('getGreeting', function () {
  it('should return Hello World.', function () {
    var greeting = foo.getGreeting();
    expect(greeting).to.equal("Hi. I'm a Foo!");
  });
});

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