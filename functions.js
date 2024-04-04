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