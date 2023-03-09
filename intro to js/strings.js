
let my_name = 'Ali'; // we can initialize string by using single qoutes ' '
let second_name = "Ali"; //we can initialize string by using double qoutes " "
console.log(my_name.length); //this will print the length of string


// Template literals Backtick ````  in js `````   
// String interpolation : inserting varialbe directly in template literals 

let boy1 = "Ali";
let boy2 = "Anis";

console.log(boy1 + ' is friend of ' + boy2); //simple way of printing string
// let sentence =`boy1 is friend of boy2  `
let sentence =`${boy1} is friend of ${boy2} ` // like this u can print the value of variable in a string

console.log(sentence + '\n ');

// Backtick in js `````   


// Escape sequence
let animal ='cat\'s';//if we want to use a single quote with in a string like banana's JS will not allow us to write let fruit = 'banana's' we have to use escape sequence a back slash (\) before single quote eg let fruit = 'banana\'s' 
console.log(animal);

// Escape sequence 

// String Methods 
let name = "Anis";
let sen = "      th is is my javaScript practice session .  ";
console.log(sen);
console.log('trim()  remove white spaces: '+sen.trim()); // remove white spaces

console.log('toLocaleUpperCase() this will convert string to upper case: '+name.toLocaleUpperCase() );
console.log('toLocaleUpperCase() this will convert string to upper case: '+ name.toLowerCase() );
let new_name = name.replace("Anis","Azee");// this will not affect the existing string but it will replace and you have to store it into the new string

console.log(name.replace("is","an"));
console.log(name);
console.log(new_name);


console.log(name.slice(0,2));// 0 and 1 will be included but index 2 will not included it will print ( A n ) of name 