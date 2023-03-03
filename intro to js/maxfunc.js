
const prompt = require("prompt-sync")();



// find Max function   
const num= parseInt(prompt('Enter a positive integer: '));


function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      max_num = num
    }
  }
  return max_num;
}


let arr = [1, 23, 3, 5, 6, -1, -12, 23, , 24, 19];
let max = find_max(arr);

console.log(max);

//// find Max function   