// Higher order array methods  map filter reduce

let numbers = [2,4,55,77];
//map() ek new array return krta hai array k har element pe operations preform kr k 
// let a = numbers.map(function (value , index) { below code is also some you can just write function this way
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.
 let a = numbers.map((value , index) =>{
    console.log(value, index);
 
    if(value%2!=0)
    {
       return value+1
    }
    else{
        return value
    }
 })
 console.log(a);

