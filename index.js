const stringLength = string => {
  if (string.length < 1) { throw Error('string should be at least 1 character'); };
  if (string.length > 10) { throw Error('string should have less than 10 character'); };
  return string.length
};

const reverseString = str => str.split("").reverse().join("");

class calculator {
  constructor(_arr){
    this.arr = _arr;
  }
  add = () => this.arr.reduce( (a, b) => a + b );
  subtract = () => this.arr.reduce( (a, b) => a - b );
  multiply = () => this.arr.reduce( (a, b) => a * b );
  divide = () => parseFloat(this.arr.reduce( (a, b) => a / b ).toFixed(3));
}

module.exports = {stringLength: stringLength, reverseString: reverseString, calculator:calculator, capitalize: capitalize}