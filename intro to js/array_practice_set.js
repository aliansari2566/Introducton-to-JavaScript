const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 


// Factorial Function
let numbers = [2,33,4,5,6,76,77,8]; 


let num = parseInt(prompt('Enter a number: '));  // taking input from user 

numbers.push(num);

console.log(numbers);


// taking input using do while loop until user enter 0 
let new_array = [2,33,4]; 
let a ;
do {
    
a = parseInt(prompt('do while loop Enter a number: '));  // taking input from user 

new_array .push(a);

console.log(new_array );
} while (a !=0);


//taking inout from user in for loop when array is empty

var inputArray = [];
var size = 2; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = parseInt(prompt('Enter Element ' + (i+1)));
}

//Print the array in the console.
console.log(inputArray);


//findind fictorial using reduce ()

let arr2 =[5,4,3,2,1];

let arr3 = arr2.reduce((num1,num2)=>{

    return num1 * num2;
})
console.log(arr3);