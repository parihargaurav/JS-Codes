// javascript and classes

// in jas objects are basic unit unllike in other laguages classes cases.

/*  Under the hood, JavaScript's classes are still prototype-based. 
They provide a more familiar syntax for defining object blueprints and inheritance hierarchies, similar to class-based languages. */

// objects and classess are programming paradiym meaning programming styling or structure of code in oops
// objects -  collections of properties and methods =  toLowerCase

// parts of oop
// object literal meaning using or working with objects.

/* topics 
- constructor functions
- prototypes 
- classes
-instances(new, this) keyword 

4 pillars 
abstractions, encapsulations , inheritance, polymorphism */

// current context case.  we use this keyword

// code---

const user = {
  username: "Gaurav",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
console.log(this); // {}



// constructor functions


function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}


// here new keyword is constructor function- it allows us to create multiple instances from single objects. 
// that's why we use new keyword for new instances
const userOne = new User("Gaurav", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);//[Function: User]

console.log(userTwo);


/*The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
 The return value is a boolean value. */