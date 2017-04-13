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
  it('should get all companies by state', function () {
    var res = utils.getCompaniesByState(companies, 'CA');
    expect(res).to.eql(['Archimedes Inc.', 'Credit Karma', 'Embark']);
  });
});