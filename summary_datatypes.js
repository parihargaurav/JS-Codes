// generally datatypes of 2 types
//1. primitive -  call by value
//2. non - primitive -  call by reference
// 1. Primitve- 7 types ; string, number, boolean, null= empty, undefined, symbol, bigInt

//  non primitive - call by reference

//  array, functions, objects
// symbol is unique as it makes .
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId); // false as it makes unique even the data is same

const  bigNumber = 2458451618412n

// non primitive datatype
//  in js we can treat functions  as variables

//  arrays
const heros = ["gaurav", "parihar"];

// objects
let myObj = {
    name:"Gaurav",
    age : 22,
}

// functions
const myFunction = function(){
    console.log("Hello Gaurav");
}

console.log(typeof myFunction); // function
// function return is object function