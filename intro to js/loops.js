
const prompt = require("prompt-sync")();   // if you want to use prompt in vscode then you have to do this 



 const a= parseInt(prompt('Enter a positive integer: '));  // taking input from user and converting it into number


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

let text = " ";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + '\n';
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

