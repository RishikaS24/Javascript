// console.log(2>1)                     //normal comparision works fins with js(same data type)
// console.log(2==1)
// console.log(2>=1)


// console.log("2">1)                   //if different data type then sometimes its unpredictable            
// console.log("02"<=1)



console.log(null>0)                     //when we use comparision operators js converts null to a number 0>0 -> false
console.log(null==0)                    //the equality opertator doesn't convert null to number so false
console.log(null>=0)                    //same as above null->0

console.log(undefined>0)                    
console.log(undefined==0)               //In JavaScript, undefined becomes NaN in numeric comparisons, and any comparison with NaN is always false.    
console.log(undefined>=0)                    

console.log(NaN>0)                      //Any comparison with NaN is false

console.log("">0)                       //"" becomes 0, so 0 > 0 is false
console.log("">=0)                      //"" becomes 0, so 0 >= 0 is true


//=== strict check
console.log("2"===1)                    //it checks not only value but also datatype