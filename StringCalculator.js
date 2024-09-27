const Utils = require('./Utils');

class StringCalculator {
    constructor() {
      this.defaultDelimiter = /,|\n/;
    }
  
    add(numbers) {
      if (numbers === '') {
        return 0;
      }
  
      let delimiter = this.defaultDelimiter;

    if (this.hasCustomDelimiter(numbers)) {
      const { customDelimiter, remainingNumbers } = this.extractCustomDelimiter(numbers);
      delimiter = customDelimiter;
      numbers = remainingNumbers;
    }

    if (this.isEmpty(numbers)) {
        return 0;
    }

    const numArray = numbers.split(delimiter);
    return this.calculateSum(numArray);
    }

    hasCustomDelimiter(numbers) {
        return numbers.startsWith('//');
    }

    isEmpty(numbers) {
        return numbers === '';
      }
  
    extractCustomDelimiter(numbers) {
        const delimiterDeclarationEnd = numbers.indexOf('\n');
        const delimiterPattern = numbers.substring(2, delimiterDeclarationEnd);
        
        let customDelimiter;
        if (delimiterPattern.startsWith('[') && delimiterPattern.endsWith(']')) {
          const delimiters = delimiterPattern.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
          customDelimiter = new RegExp(delimiters.join('|')); // Support multiple delimiters
        } else {
          customDelimiter = new RegExp(Utils.escapeRegExp(delimiterPattern)); // Single character delimiter
        }
    
        // Return both customDelimiter and remainingNumbers
        const remainingNumbers = numbers.substring(delimiterDeclarationEnd + 1);
        return { customDelimiter, remainingNumbers };
      }  

    calculateSum(numArray) {
      return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
  }
  
  module.exports = StringCalculator;
  