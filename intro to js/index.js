//  const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 
















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
// while(ran !== num){

//   guess(num);
//   if (ran === num) break;


// }


// this code will run on browser 
 alert("hello");

let num1= parseInt(prompt('Enter a positive integer to guess ')); 

alert("type of the value entered is = " + typeof(num1))
let write = confirm("if you want to write it on the page then press ok")
if(write){
  document.write(num1)
}
else{
  document.write("press ok to write ")
}

console.log("type of null is = "+typeof(null));