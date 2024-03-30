let age = 22;

console.log(typeof age); // number 
console.log(typeof(age)); // number

//  if we have 
let score = "34"

console.log(typeof score); // string
console.log(typeof(score)); // string

//  her we seen that "" makes number to string and if we want only number 

let valueInNumber = Number(score); // converting to number datatype
console.log(typeof(valueInNumber)); // number

let my = "2323kas"
let myeee = Number(my); // converting to number datatype
console.log(typeof(myeee)); // number
// here it is converting to number but what is it's original datatype

console.log(myeee); // getting NaN - not a number

/* output of using any let to convert to number 
"33" = 33
""2323kas = NaN
true = 1, false = 0
"" = false in case of boolean 
"gaurav" =  true in case of boolean*/


let isLogges = "gaurav"
let ok = Boolean(isLogges);
console.log(ok);