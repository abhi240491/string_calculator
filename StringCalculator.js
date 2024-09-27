class StringCalculator {
    constructor() {
      this.defaultDelimiter = /,|\n/;
    }
  
    add(numbers) {
      if (numbers === '') {
        return 0;
      }
  
      const numArray = numbers.split(this.defaultDelimiter);
      return this.calculateSum(numArray);
    }
  
    calculateSum(numArray) {
      return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
  }
  
  module.exports = StringCalculator;
  