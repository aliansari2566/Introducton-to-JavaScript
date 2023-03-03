const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 


// Factorial Function

const a= parseInt(prompt('Enter a positive integer: '));  // taking input from user and converting it into number

console.log("you can", a<18? "not drive" : "Drive" )