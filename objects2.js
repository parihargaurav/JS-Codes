//  here we talk about objects in singleton and using in cunstructor

// const tinderUser  =  new Object(); // output: {} singleton

const tinderUser = {}; // output : {} non singleton in this object

(tinderUser.id = "123bcd"), (tinderUser.name = "Gp ");
tinderUser.isLoggedIn = false;

console.log(tinderUser);
//  objects ke under objects

const regularUSer = {
  email: "abc@gmail.com",
  fullname: {
    // object ke under object
    username: {
      firstname: "Gaurav",
      lastname: "P",
    },
  },
};

console.log(regularUSer.fullname.username.firstname);

// combing objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
// const obj3 = Object.assign({}, obj1 , obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//  here we will be using this const in evrytime
const obj3 = { ...obj1, ...obj2 }; // spread operator
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// how the syntax will when the values will come from database

// array of objects:
const users = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
];

console.log(Object.keys(tinderUser)); // output in array

// to if this having the property or not

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true as it returns boolean

// object destructing-->

const course = {
  course: "JavaScript",
  price: "6584",
  courseInstructor: "Gaurav",
};
// course.courseInstructor

const { courseInstructor: instructor } = course; // here we had de structure the courseInstructor to instructor
// console.log(courseInstructor); // Gaurav
console.log(instructor); // Gaurav

//  API here data in json format
// keys bhi string hoti hai aur values bhi

// {  Example for api call in objects form
//     "name": "Gaurav",
//  }

// api in arrays forms
// [{},
//  {},
//   {}];


// JSON FORMATOR

//  JSON = JAVASCRIPT OBJECT NOTATION