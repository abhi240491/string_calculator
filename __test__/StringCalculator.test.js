const StringCalculator = require('../StringCalculator');

test('should return 0 for an empty string', () => {
  const calculator = new StringCalculator();
  expect(calculator.add('')).toBe(0);
});

test('should return the number for a single number', () => {
  const calculator = new StringCalculator();
  expect(calculator.add('1')).toBe(1);
});

test('should handle comma and newline delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2\n3')).toBe(6);
});

test('should handle custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2;3')).toBe(6);
});

test('should handle custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n')).toBe(0);
});
