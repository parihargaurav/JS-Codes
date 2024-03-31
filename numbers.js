const score = 1000;
console.log(score); //1000

const balance  = new Number(1004);
console.log(balance); // Number : 1004

console.log(balance.toString().length); //4
console.log(balance.toFixed(1)); // 1004.0
 
// about precision- they take values from left 
const otherNumber = 123.48567
console.log(otherNumber.toPrecision(4)); //123.5
console.log(otherNumber.toPrecision(3)); //123

const hundreds  = 1000000000
// to indian
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,000




