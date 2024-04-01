const myArr = [0, 11, 2, 3, 4, 15]
console.log(myArr[1]); // 11

// Array methods
myArr.push(6);
myArr.pop(); // removes element from last 

 myArr.unshift(12); // adds element to start
myArr.shift(); // removes first  element from arrray

console.log(myArr)

const newArr = myArr.join()
console.log( typeof myArr); // object
console.log( typeof newArr); // combines and form string

const myn1 = myArr.slice(1,3)
console.log(myn1)// 11, 2  

const myn2 = myArr.splice(1,3)
console.log(myn2)//11, 2 ,3 it manupulates array in slice