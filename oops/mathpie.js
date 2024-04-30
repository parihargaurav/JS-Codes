// object has many properties
// math itself is a module and .pi meaning we want value of pi from that math module

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// here we are overriding the properites and defining the values  

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
/*In JavaScript, the term "enumerable" refers to whether an object's properties can be iterated over using a loop or accessed via iteration methods like Object.keys(), Object.values(), or Object.entries().

By default, properties defined directly on an object's prototype are not enumerable, while properties defined directly on the object itself are enumerable. */