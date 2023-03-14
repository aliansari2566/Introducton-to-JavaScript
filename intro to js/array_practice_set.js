const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 


// Factorial Function
let numbers = [2,33,4,5,6,76,77,8]; 


let num = parseInt(prompt('Enter a number: '));  // taking input from user 

numbers.push(num);

console.log(numbers);


// 
let new_array = [2,33,4,5]; 
let a ;
do {
    
a = parseInt(prompt('do while loop Enter a number: '));  // taking input from user 

new_array .push(a);

console.log(new_array );
} while (a !=0);

//taking inout from user in for loop

var inputArray = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = parseInt(prompt('Enter Element ' + (i+1)));
}

//Print the array in the console.
console.log(inputArray);