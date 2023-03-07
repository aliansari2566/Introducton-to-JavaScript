// MEAN of 5 numbers 
const arr = [4, 5, 6, 7, 25];

let mean = (arr) => {
let sum = 0.0;
let n =  arr.length;
let avg =0;
if (arr.length>0) {
  for (let i = 0; i < n; i++) {
    sum +=arr[i];
    
   }
 
   avg = sum/n;
}


 return avg; 

}
 
mean(arr);
console.log("MEAN OF 5 NUMBERS "+ arr + " = " + mean(arr));
console.log('\n');
// MEAN of 5 numbers 

const mean_func =(a, b, c, d, e) =>{
 return (a+b+c+d+e)/5;
}

console.log(mean_func(2,3,4,5,6));