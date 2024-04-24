// here in promises we generally consumes it
// new keyword helps to understand the object's instance.
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// promises takes a callback in it.. sometimes of types hell call-backs etc.
// promises gives object;

const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // db calls, ryptography, network
  setTimeout(function () {
    console.log(`Async task is complete`);
  }, 1000);
}); // creating promises ; resolve and reject tasks like async awaits


promiseOne.then()