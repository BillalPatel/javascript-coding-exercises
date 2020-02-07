const factorial = require('./index');

describe('Factorial function', () => {
  test('should get factorial of a given number', () => {
    expect(factorial(5)).toEqual(120);
  });

  // test('should get factorial of a larger number', () => {
  //   expect(factorial(11)).toEqual(0);
  // });

  test('should return null value for passing negative number or less/more than one argument', () => {
    expect(factorial('hello')).toEqual(
      
    );
  });
});
