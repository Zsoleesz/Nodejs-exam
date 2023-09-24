const calc = require('./calc');

console.log("3 + 15 = " + calc.sum(3, 15));
console.log("15 - 3 = " + calc.sub(15, 3));
console.log("15 * 3 = " + calc.mul(15, 3));
console.log("15 / 3 = " + calc.divide(15, 3));
console.log("15 / 0 = " + calc.divide(15, 0));
