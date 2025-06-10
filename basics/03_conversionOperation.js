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
// console.log(typeof booleanLog)
// console.log(booleanLog)

// 1 or any number - true, 0 - false;     
// "" - false
// "asdf" - true

//Same can be done with the string



//--------------------------------------OPERATIONS-------------------------------------------------

let value = 3
let negativaValue = -value
console.log(negativaValue)          //converted into negative value


let str1 = "Hello"
let str2 = "World"
let str3 = str1+str2                //add two strings
console.log(str3)


console.log("1"+"2")                //if we add two strings then it will concatenate
console.log("1"+2)                  //if string is present then the type will be string of the outcome
console.log(1+"2")
console.log(1+2+"3")                //1 + 2 → 3 (number + number = number) ---> 3 + "3" → "33" (number + string = string, so 3 is coerced into "3" and concatenated)
console.log("1"+2+3)                


console.log(true)
console.log(+true)                  //the + operator converts it into a number
// console.log(true+)               //invalid syntax
console.log(+"")                    //the + operator converts the empty string into number


let counter = 100
counter++                           
console.log(counter)                //first uses the value then increments


let gameCounter = 100
++gameCounter
console.log(gameCounter)            //first increments the value and then gives the value