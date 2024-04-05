// // function addTwoNumbers(number1, number2){
// //     console.log(number1 + number2);
// //     }

// // addTwoNumbers(4, 6) // 10

// function addTwoNumbers(number1, number2){
//     return number1 + number2
//     }

// const result = addTwoNumbers(4,6)
// console.log("Result: ", result)

function loginUserMeaasage(username) {

    // in if conditon undefined is false and "" is also false
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMeaasage("Gaurav")); // output Gaurav just logged in
console.log(loginUserMeaasage());
/*output:-
Please enter a username
undefined
 */


// function calculateCartPrice(...num) // here ... is rest or spread operator
// ... as in rest it will bundle up to a array form  and in spread it spreads the data more cleanly

function calculateCartPrice(val1, val2, ...num1){
return num1
}

console.log(calculateCartPrice(200, 500, 2000))
// val1 is 200 val2 is 500 and then ...num1 will give 2000 as it was left


// how to pass object in function

const user = {
  username: "Gaurav",
  price: 166
}

// function definition
function handleObject(anyobject){
  console.log(`Username  is ${anyobject.username} and price is ${anyobject.price}`)

}
// function call 
handleObject(user ) // Username  is Gaurav and price is 166
