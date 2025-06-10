const accountId = 23578                                     //cannot be changed
var accountEmail = "rishika@gmail.com"                      //avoid using var         
let accountPassword = "hi177"                               //to update values use let
accountCity = "Indore"                                      //not a good practice
let accountState;                                           //will show undefined since no value is assigned


// accountId=678990
accountEmail = "dora@gmail.com"
accountPassword = "hello177"
accountCity = "Italy"


/* Prefer not to use var
because of issue in functional and block scope
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])