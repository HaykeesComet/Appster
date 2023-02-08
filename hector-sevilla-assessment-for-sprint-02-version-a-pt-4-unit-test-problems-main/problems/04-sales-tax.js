/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front. Use a tax percentage of 9%.

Hint: Look up `toFixed()` on MDN

Examples:

console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'
***********************************************************************/

let salesTax = (...prices) => {
  let sum = 0;
  let tax = 0;
  for (p of prices) {
    sum += p;
    tax = sum * .09;
  }
  return '$' + Number.parseFloat(tax).toFixed(2);
}

console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// Try catch for assessment purposes only.  Not normal practice.
try {
  module.exports = salesTax;
} catch (e) {
  module.exports = null;
}
