const myArr = [0, 11, 2, 3, 4, 15]
console.log(myArr[1]); // 11

// Array methods
myArr.push(6);
myArr.pop(); // removes element from last 

 myArr.unshift(12); // adds element to start
myArr.shift(); // removes first  element from arrray

console.log(myArr)

const newArr = myArr.join()
console.log( typeof myArr); // object
console.log( typeof newArr); // combines and form string

const myn1 = myArr.slice(1,3)
console.log(myn1)// 11, 2  

const myn2 = myArr.splice(1,3)
console.log(myn2)//11, 2 ,3 it manupulates array in slice

// continue
const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros);
console.log(marvel_heros) // merges and in form of an array element.

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);


// for spreading the values:
const another_array = [1,2,3, [4,5], 6] 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // [ 1, 2, 3, 4, 5, 6 ]
//   here values spread out 

// now converting into array: 
console.log(Array.from("Gaurav")) // [ 'G', 'a', 'u', 'r', 'a', 'v' ]

console.log(Array.from({name: "Gaurav"})); // [] imp**
// here it will give empty array as here it should be instructed that how to convert to in fomr of array

let score1 = 12
let score2 = 22
let score3 = 34
console.log(Array.of(score1, score2, score3)); // [ 12, 22, 34 ]
 
 