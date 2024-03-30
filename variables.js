const accountId = 144533
let accountEmail = "abc@gmail.com"
var accountPassword = "1545"
accountCity = "Jaipur"
let accountState; // here the value will be undefined

// accountId = 23 // not allowed

accountEmail = "gfb@gmail.com"
accountCity= " Jodhpur"
accountPassword = "155555"
/* Prefer not to use var 
because of issue in block scope{} and functional scope*/ 

console.table([accountId, accountEmail, accountPassword, accountCity])
// here console.table will genreate output in table