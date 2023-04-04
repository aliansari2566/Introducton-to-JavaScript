// Higher order array methods  map filter reduce

let numbers = [2,4,50,70];
//map() ek new array return krta hai array k har element pe operations preform kr k 
// let a = numbers.map(function (value , index) { below code is also some you can just write function this way
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.
// let a3 = numbers.map(x =>  x+1 );  we can write the function like this it is called refector
 let a = numbers.map((value , index) =>{ 
    console.log(value, index);
 
    if(value >10)
    {
       return value
    }

    // if(value %2!=0)
    // {
    //    return value+1
    // }
    // else{
    //     return value
    // }
   
 })
 console.log(a);


//filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

let a2 = numbers.filter((we_can_write_anything ,index) => {
   if(we_can_write_anything %10==0)
   {
      return we_can_write_anything;
   }
  
   
} )
console.log(a2);


// reduce retunrs a value 

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

// let a3 = numbers.reduce((value1 , value2) =>{

//     return value1 - value2
// })

// console.log(a3);
