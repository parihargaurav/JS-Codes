//  this keyword helps to understand the current context(values)
// javascript me we will deal with objects only ;;

const user = {
  username: "Gaurav",
  price: 75,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(typeof this); // object
  },
};

user.welcomeMessage(); // Gaurav, welcome to website

// here this is giving till here current context

user.username = "sam"; // context changed
user.welcomeMessage(); //sam, welcome to website

// here this is giving till here current context
///////////////////////////////////////
//   here the this keyword works only on objects not in functions

// eg
function chai() {
  let usernames = "Gaurav";
  console.log(this.usernames); // undefined
}
chai();

// const chai = function(){
//     let username = "Gaurav"
//     console.log(this.username); undefined

// }
// now using arrow function =>
const chai1 = () => {
  let username = "GP"
  console.log(this); // undefined
}




//  arrow function syntax
// const myFunction = (param1, param2) => {
//   // function body
// };

const addTwo = (num1, num2) =>{
    return num1  + num2 
}

console.log(addTwo(5,6))// 11

//  implicit return in arrow function -- meaning no need to writing return keyword

const addToww = (nums1, nums2) => (nums1 + nums2) // this is also good

//  pro tips: 
//  1. in {curly bracess} we had to return function 
//  2. (parentheis ) no need of return keyword



//  explicity means we need to write return keyword

const adddTwo = (nums1 , nums2) => ({username: "Gaurav"}) // this way the objects are returned


console.log(adddTwo(5,6)) // { username: 'Gaurav' }
 