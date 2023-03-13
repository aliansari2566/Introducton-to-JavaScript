// Higher order array methods  map filter reduce

let numbers = [2,4,55,77];
//map() ek new array return krta hai array k har element pe operations preform kr k 
 let a = numbers.map((value , index)=>{
    console.log(value, index);
    return value + 1;
 })
//  console.log(a);