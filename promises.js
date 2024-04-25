// here in promises we generally consumes it
// new keyword helps to understand the object's instance.
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// promises takes a callback in it.. sometimes of types hell call-backs etc.
// promises gives object;

const promiseOne = new Promise(function (resolve, reject) {
  // functions have 2 parts - resolve and reject
  // do an async task
  // db calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
}); // creating promises ; resolve and reject tasks like async awaits

promiseOne.then(function () {
  console.log("Promise consumed ");
}); // this we write in resolve function keyword
// this will written values of function

// new form like no need to create new variables

new Promise(function (resolve, reject) {
  // call back here in promise
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

// how data values are consumed and values are given
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});



// resolve and reject

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // true
    if (!error) {
      resolve({ username: "Gaurav", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);   //{ username: 'Chai', email: 'chai@example.com' }

    return user.username;
  })
  .then((username) => {
    console.log(username);  // { username: 'Gaurav', password: '123' }

  })
  .catch(function (error) {
    console.log(error); // Gaurav
  })
  .finally(() => console.log("The promise is either resolved or rejected"));


// new syntax async and await
// promises is an object.


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error); // ERROR: JS went wrong

    }
}

consumePromiseFive()
// major problem with async and await is that they can't directly handle the problem



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()  // dummy api async and await
