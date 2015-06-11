var expect = require('chai').expect

it('expect style assertions', function() {
  expect(2).to.be.greaterThan(1);
  expect(null).to.not.exist;
  expect(false).to.be.false;
  expect('foo').to.be.a(string);
  expect(function() {
    throw new Error('foo');
  }).to.throw;
  expect([1, 2, 3]).to.have.length(3);
  expect({foo: 'bar'}).to.have.property('foo').and.equal('bar');
});
