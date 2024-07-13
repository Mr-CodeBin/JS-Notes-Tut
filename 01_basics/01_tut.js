const accountId =144553
let accountEmail = "test@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState; // use semicolon or not, its the same this in javascript

// accountId =2 
//const cannot be changed, not allowed

/*
preferred not to use var
becoz of issue in block scope and functional scope
*/

accountEmail ="test1@gmail.com"
accountPassword  = "6666623"
accountCity ="India"


console.log(accountId);
console.table([ accountId,accountEmail, accountPassword, accountCity, accountState])