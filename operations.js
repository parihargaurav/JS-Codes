let value = 3;
let negValue = -value;
console.log(negValue);//-3
/*
console.log(2+2) 
console.log(2**2) 2 raise to power 2*/

let str1 = "Gaurav"
let str2= " Parihar"
let str3 = str1 + str2;
console.log(str3);

console.log("1"+2); // 12   
console.log(1 + "2"); // 12
console.log("1" + 2+2); // 122
console.log(11+2+ "3"); // 133
console.log("1+2+3"); // 1+2+3
console.log(+true); // 1
console.log(+"");// 0
let gamecounter = 100;
gamecounter++; // or this way ++gamechanger and will be 101
console.log(gamecounter);// 101


// comparison of datatypes:
console.log("2" >1); // true
console.log(null > 0); //false
console.log( null == 0);  // equality check // false
console.log(null >= 0); // true

/* Comparisons convert null to a number , treating as 0
that's why null>= 0 is true and null>0 is false*/

console.log(undefined < 0); // false

//  strick check  === which checks the number and it's equality check
console.log("2"===2);// false 
//  not same datatype