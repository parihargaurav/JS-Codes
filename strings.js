//  using backticks `` for string interpretation
const name = "Gaurav"
const repoCount = 12

console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`);
// understanding methods in strings
const gameName = new String('gaurav');
console.log(typeof gameName); // string type is object
console.log(gameName[3]);
console.log(gameName.length);// accessing methods of object
console.log(gameName.charAt(2)); // u
 
console.log(gameName.substring(0,4));//gaur

console.log(gameName.slice(-4, 3)); //u
// it will take values from back side from v onwards
const url = "https://gaurav.com";

console.log(url.replace('g', 'q')) //  https://qaurav.com
console.log(url.includes('a')); // true
