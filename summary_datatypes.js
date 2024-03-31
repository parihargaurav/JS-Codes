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



// here memeory stored in js is as stack and heap

//  stack form is in primitive datatypes
//  heap form is in non - primitive datatypes
//  stack eg
let myYoutube = "GP"
let ok = myYoutube
ok = "Lone"
console.log(myYoutube);// GP
console.log(ok);// Lone

//  heap

let userOne = {
    email: "gaurav@gmail.com",
    upi: "ok@ybl"
}
 let userTwo = userOne
 userTwo.email = "abc@gmail.com"

 console.log(userOne);
 console.log(userTwo);
//   in stack we deals with copy of data
//  in heap we work on real values data  reference .