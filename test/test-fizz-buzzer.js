const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {


  // test the normal case
  it('should be multiple of 15, 5, or 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
    {test: 3, expected: 'fizz'}, 
    {test: 5, expected: 'buzz'}, 
    {test: 15, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.test);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return number if not mult of 3 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it('should produce error if input isn\'t number', function() {
    const badInputs = ['hello', false, undefined, function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
})

