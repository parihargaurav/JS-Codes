/* In JavaScript, getter and setter methods are special functions that allow you to define custom behavior when accessing or modifying object properties.
 They are commonly used to encapsulate property access and enable better control over how values are read from or written to object properties. */


// getter ke saath setter bhi likhna hota hai

class User {
    constructor(email, password) {
        this.email = email;
        this. password = password
    }
    
    get password(){
        return this._password.toUpperCase()
    }
    
    set password(value){
        this._password = value.toUpperCase()
    }
}

// get aur set ko saath me execute hota hai 
const gaurav = new User ("Gp@abc.com", "1234567890987654321")
console.log(gaurav.password)

// here  earlier this.password in constructor and this.password in getter and setter is asame so to which to execute first.
// now,  to remove this dilemaa we made another variable in getter and setter and this will help to not get the error of-- "Maximum call stack size exceeded"


// code--

class User1 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);


// definePropert is example of property of getter and setter