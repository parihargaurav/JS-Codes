const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // by default null hota hai but values daal sakhte hai
console.log(tea._email);

// factory functions in js
// eg: Object.create

/*In JavaScript, factory functions are functions that return objects. 
They are called "factory" functions because they are used to create and return new instances of objects, similar to a factory in manufacturing that produces products. */ 