
let my_name = 'Ali'; // we can initialize string by using single qoutes ' '
let second_name = "Ali"; //we can initialize string by using double qoutes " "
console.log(my_name.length); //this will print the length of string


// Template literals Backtick in js `````   
// String interpolation : inserting varialbe directly in template literals 

let boy1 = "Ali";
let boy2 = "Anis";

console.log(boy1 + ' is friend of ' + boy2); //simple way of printing string
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