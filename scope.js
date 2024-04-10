// global scope 
// values outside block scope is global scope
let a = 10; //  blocked scope variable let
const b = 12;
var c = 13;

// values inside {} is block scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// scope ke under value bahar nahi jani chahiye
console.log(a); // 10
console.log(c); // 30
console.log(b);// 12
// yaha var ne apni value badal li isliye scope varibale ka concept aya hai 