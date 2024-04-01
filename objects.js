//  objecyts are declared in 2 ways -  1 is literals way and 2 =  constructorway

// singleton =  yeh apne tarah ka ek hi object hai
//  when we make objects through literals then no singleton but in constructor it will be singleton.

// object literals - object ko declare karne  ka tarika /// here in objects => we can  define the key  and its value

// Object.create is constructor form of declaration

const mySym  = Symbol("key1");


const JsUser = 
{
    name : "Gaurav",
    age : 22,
    location: "Jodhpur",
    [mySym] : "mykey1",
    email: "gaurav@microsoft.com",
    isLoggedIn: false,
    lastloginDays : ["Monday", "Saturday"]

    }
    //  here the values are defined as strings to make to use as ""

console.log(JsUser.email); //gaurav@microsoft.com
console.log(JsUser["email"]); //gaurav@microsoft.com

// string type 
console.log( typeof JsUser[mySym]); // string


JsUser.greeting = function (){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function (){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]


console.log(JsUser.greetingTwo()); // Hello JS User , Gaurav