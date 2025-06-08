let score = "22as";
// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)      //converted string into number datatype
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//"33" - 33                     the number in a string is easily convertible to type number
//"33abc" - NaN                 if its a combination then the value comes NaN but the type is number    
//true - 1, false - 0           for boolean it changes to 0 and 1 

let isLoggedIn = "1234"
let booleanLog = Boolean(isLoggedIn)
console.log(typeof booleanLog)
console.log(booleanLog)

// 1 or any number - true, 0 - false;     
// "" - false
// "asdf" - true

//Same can be done with the string