const StringCalculator = require('../StringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('should return the number for a single number input', () => {
    expect(calculator.add('5')).toBe(5);
  });

  test('should return the sum for comma-separated numbers', () => {
    expect(calculator.add('1,2,3')).toBe(6);
  });

  test('should return the sum for newline-separated numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should return 0 for a custom delimiter with no numbers', () => {
    expect(calculator.add('//[***]\n')).toBe(0);
  });

  test('should handle a single custom delimiter', () => {
    expect(calculator.add('//;\n1;2;3')).toBe(6);
  });

  test('should handle multiple delimiters of varying lengths', () => {
    expect(calculator.add('//[***][%%][#]\n1***2%%3#4')).toBe(10);
  });

  test('should throw an error for negative numbers', () => {
    expect(() => calculator.add('-1,2,-3')).toThrow('negative numbers not allowed: -1, -3');
  });

  test('should ignore zeros in the input', () => {
    expect(calculator.add('0,1,2,3')).toBe(6);
  });
});
