const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 


// Factorial Function

const num1= parseInt(prompt('Enter a positive integer: '));  // taking input from user 


let facto = 1;

let factorial = (num1)  => {
 
  
  if(num1<0)
  {
    console.log('Error! Factorial for negative number does not exist.');
  }
  else if(num1===0)
  {
    console.log(`The factorial of ${num1} is 1.`);
  }
  else {
    for (let i = 1; i <= num1; i++) {
 
  
      facto  *=i;
      // console.log("value of facto in loop "+ facto );
    }
    console.log(`The factorial of ${num1} is ${facto}.`);
    return facto;
  }
 
  
}

let fact = factorial(num1);
console.log("Factorial "+ fact );

// Factorial Function// 



