
const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 


// Factorial Function

const a= parseInt(prompt('Enter a positive integer: '));  // taking input from user and converting it into number


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}