console.log(Math); // Object [Math] {}  object
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6));// 5

console.log(Math.random()); // random value
console.log((Math.random()*10) + 1); //  in 1 to 9
console.log(Math.floor(3.344)); // 3

const min = 10 ;
const max= 20;
console.log(Math.floor(Math.random() * (max - min +1)) +min);
/* the value will range from 10 to 20 */