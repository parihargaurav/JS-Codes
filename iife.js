//  Immdeiatley Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB Connect`)
})();  //  ; use for code ending 


//  here we have used () 2 parenthesis
/* 1 ()  is for function definition
2 () is for function  execution call*/

//  use of iife is to avoid global scope execution chaos and to easily invoked function
// They are typically used to create a local scope for variables to prevent them from polluting the global scope


//  using arrow function
( (name) => {
    //  simple iife
    console.log(`DB Connect 1 ok ${name}`);
})('Gaurav');