// JavaScript reduce() is a higher order function used in data manipulation that reduces an array to a single value.

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
// output
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6
// accumulatot takes initial values from 2 



// using arrow function 
const myTotal1 = myNums.reduce((acc, curr) => acc + curr, 0);  // initially 0 for accumulator value 
  // cuurent = curr takes value current val and accu takes intermediate values likes 2+3 = 5 so 5 is accu 
console.log(myTotal1); // 6



// array of objects
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

//  add them using reduce function
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); //22996 total 




/*The callback function takes two parameters: the accumulator and the current value of the array being processed. 
Use the accumulator to store the intermediate result.
 The accumulator is the value that is returned by the callback function and passed as the first argument in the next iteration. */
