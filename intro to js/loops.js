
const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 



// const a= parseInt(prompt('Enter a positive integer: '));  // taking input from user and converting it into number


// Loops in JS

let str1 = '';

for (let i = 0; i < 9; i++) {
  str1 = str1 + i;
}
parseInt(str1)
console.log(str1);
console.log(typeof str1);
// Loops in JS

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
console.log(text, + ' ');




// objects with for loop

let marks = { 
  harry: 53,
  Ali: 85,
  sameer: 90,
  umair: 71 
};


console.log(Object.keys(marks));// this will print the values of object in an array like [ 'harry', 'Ali', 'sameer', 'umair' ]

// for in loop  objects with for loop
for (let i = 0; i < Object.keys(marks).length; i++) {
 
  console.log("marks of object " + Object.keys(marks)[i] + " " + marks[Object.keys(marks)[i]]); 
  
}
console.log('\n');








for (let key in marks) {
  console.log("marks of object " + key + " " + marks[key]);

}

// for in loop  objects with for loop
  
for (const key in marks) {
  if (marks.hasOwnProperty.call(marks, key)) {
      const element = marks[key];
      console.log(element);
      
  }

}



// forin loop 

console.log('\n');


// while loop
let n = parseInt(prompt('Enter the value of n for while loop: ')); // in this way you are taking input and it will be converted and save in n
console.log(typeof n);

// let b = prompt("Enter the value of b") //first taking inputo from user 
// b= Number.parseInt(b); // ther converting it to number because when you take input from promt by defualt it is a string you have to convert

let counter = 0;
while(counter < n){
  console.log(counter);
counter++;
}


// 
do {
  console.log(counter);
counter++;
}while(counter < n)




let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
  console.log(str + ' ');
 
}
 let str2 = parseInt(str); // parseInt dose not convert the existing string to  number you have to store it into another variable to convert it.
// console.log(parseInt(typeof str));
console.log(str + ' ');
console.log('this is the type of str2 ' + typeof str2 + str2 );

Number(str);
console.log( typeof  Number(str));