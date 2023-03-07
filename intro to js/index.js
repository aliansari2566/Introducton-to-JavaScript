 const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 







console.log("below this ");

















// Template literals Backtick in js `````   
// String interpolation : inserting varialbe directly in template literals 

let boy1 = "Ali";
let boy2 = "Anis";

// let sentence =`boy1 is friend of boy2  `
  let sentence =`${boy1} is friend of ${boy2} `  // like this u can print the value of variable in a string

console.log(sentence + '\n ');

// Backtick in js `````   

// String Methods 
let name = "Anis";
 let sen = "      th is is my javaScript practice session .  ";
 console.log(sen);
console.log(sen.trim()); // remove white spaces

console.log(name.toLocaleUpperCase());
let new_name = name.replace("Anis","Azee");
console.log(name.replace("An","Az"));
console.log(name);
console.log(new_name);


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








// let ran = Math.floor(Math.random() *100)
// console.log(ran);




// function guess(num) {
  
//   if(ran === num)
//   {
//     console.log("");
//   }
//   else if(ran > num)
//   { 
//     console.log(" Random number is greater than guessed number");
    
//   }
//   else {
//     console.log(" Guessed number is less than random number");
//   }

// }
// while(ran !== num1){

//   guess(num1);
//   if (ran === num1) break;


// }


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