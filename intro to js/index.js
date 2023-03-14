//  const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 







console.log("below this ");


// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

let a, b, c;                       // declare 3 variables.

let z = 35;                      // declare and initialize variable z 




// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");










let array = [23,2,13,17,73,91,23,82];

for (let j=1 ,i = 0; i < array.length; j++  )  {

 
  if(array[i]!==array[j])
  {
    console.log(array[i] );
    i++;
  }

 
}

let arr1=[2,4,6,8,9];
// arr1[2].push(3);

console.log(arr1);








let ran = Math.floor(Math.random() *100)
console.log(ran);




function guess(num) {
  
  if(ran === num)
  {
    console.log("");
  }
  else if(ran > num)
  { 
    console.log(" Random number is greater than guessed number");
    
  }
  else {
    console.log(" Guessed number is less than random number");
  }

}
while(ran !== num1){

  guess(num1);
  if (ran === num1) break;


}


// this code will run on browser 
//  alert("hello");

// let num1= parseInt(prompt('Enter a positive integer to guess ')); 

// alert("type of the value entered is = " + typeof(num1))
// let write = confirm("if you want to write it on the page then press ok")
// if(write){
//   document.write(num1)
// }
// else{
//   document.write("press ok to write ")
// }

// console.log("type of null is = "+typeof(null));