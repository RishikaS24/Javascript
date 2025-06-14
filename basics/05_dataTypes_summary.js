// dataTypes - Primitive and Non Primitive (they are distinguished on the basis of how they are stored in the memory and how we can access it)

/* Primitive - call by value (whenever we call it we are not given the original memory reference and whatever changes we are doing we are doing in the copy)
they are immutable (value cannot be changed after creation), stored directly in the memory location associated with the variable
stores single value directly

String, Boolean, Null, Number, Undefined, Symbol, bigint
*/
const score = 100;                  
const name = "Rishika";
const loginId = true;
const temperatute = null;               //typeof object 
let emailId;
const id = Symbol('123');
const id2 = Symbol('123');
console.log(id === id2);               //false because symbol is unique
const bigNumber = 23456789012345678n;  //iska typeof undefined hai


/*Reference/Non Primitive - call by reference (stores collection of values, complex data types)
mutable (content can be changed after creation), stored as references to memory locations where the actual object is stored

Array, Object, Function

JavaScript is a dynamic language. This means that type checking is done at runtime, and variables can hold values of different types during the execution of a program.
*/

const anime =  ["Kimetsu no Yaiba", "Aao haru ride", "Kamisama Hajimemashite"]  //typeof object

const obj = {
    rollNo: 12,
    Name: 'Rishika',
    Age: 16
}

const myFunction = function(){
    console.log("Hello World")
}


//-------------------------------------Memory------------------------------------------------

//Stack memory(Primitive) - static memory allocation, changes will be in the copy
let name1 = "Rishika"

let namediff = name1
namediff = "Rishi"

console.log(name1)
console.log(namediff)

//Heap memory(Non Primitive)- dynamic memory allocation, changes will be in the original 

let userOne = {
    email: "userone@gmail.com",
    id:123
}
let userTwo = userOne
userTwo.email = "userTwo@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)