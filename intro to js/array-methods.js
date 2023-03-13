// Higher order array methods  map filter reduce

let numbers = [2,4,55,77];
 let a = numbers.map((value , index)=>{
    console.log(value);
    return value + 1;
 })
 console.log(a);