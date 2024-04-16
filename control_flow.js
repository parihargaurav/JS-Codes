// if statement
if(2 === "2"){   // for strict checking 
    console.log(run);  // no output as === also checks the datatype as 2 is int and "2" is string
}

if(2 =="2"){
    console.log("run");  // run
} 



// var here is global scope
//  that's why we use let and const

const score  =  100
if(score >10){
    var power = "ok "
    console.log(`user can :${power}`) // user can :ok 

}

console.log(`user power: ${power}`) // user power: ok 


//  implicit code  generally not in good practice
if(score>20) console.log("run"); // run 



//  switch cases 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
// key
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



//  truthy and falsy values that are assumed to be true and false value


const userEmail = []  // array

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");  // output : Got user email

}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {} = empty object , function(){}



// if (userEmail.length === 0) {
//     console.log("Array is empty"); // array is empty
// }

const emptyObj = {} // object empty

if (Object.keys(emptyObj).length === 0) { // arays of keys that is calculated value is array and in that we applied as .length value
    console.log("Object is empty");  // Object is empty

}


// Nullish Coalescing Operator (??): null and  undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // output 15
val1 = null ?? 10 ?? 20


// assignning values jo null value hai toh value hai toh voh call karo warna pehli value ko print karo
console.log(val1); // 10


// this is different from ternary operator

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")  // more than 80