
// String in JavaScript are immutable This means that the characters
// within them may not be changed and that any operations on strings 
// actually create new stringsalthough the variable that holds it may
// be reassigned another value


let my_name = 'Ali'; // we can initialize string by using single qoutes ' '
let second_name = "Ali"; //we can initialize string by using double qoutes " "
console.log(my_name.length); //this will print the length of string


// Template literals Backtick ````  in js `````   
// String interpolation : inserting varialbe directly in template literals 

let boy1 = "Ali";
let boy2 = "Anis";

console.log(boy1 + ' is friend of ' + boy2); //simple way of printing string
// let sentence =`boy1 is friend of boy2  `
let sentence =`${boy1} is friend of ${boy2} ` //Most used method now days. like this u can print the value of variable in a string

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

//trim()
console.log('trim()  remove white spaces: '+sen.trim()); // remove white spaces

// toLocaleUpperCase(), toLowerCase()
console.log('toLocaleUpperCase() this will convert string to upper case: '+name.toLocaleUpperCase() );//The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.The locale is based on the language settings of the browser.


console.log('toLocaleUpperCase() this will convert string to upper case: '+ name.toLowerCase() );


//replace() 
let new_name = name.replace("Anis","Azee");// this will not affect the existing string but it will replace and you have to store it into the new string
console.log(name.replace("is","an"));
console.log(name);
console.log(new_name);


//Slice is used to get a new array from the original array whereas the splice is used to add/remove items in the original array.
//slice() The slice() method does not change the original string.
console.log(name.slice(0,2));// 0 and 1 will be included but index 2 will not included it will print ( A n ) of name 
console.log(name.slice(1));// this will print the string from the 1 index (given index to last ) to end


//concat()
// The concat() method joins two or more strings.

// The concat() method does not change the existing strings.

// The concat() method returns a new string.


let text1 = "sea";
let text2 = "food";
// console.log(` ${text2} the ${text1} `);
text1.concat(text2);// this does not change the existing string you have to save the result in new string
console.log(text1);
let result = text1.concat(' '+text2);
console.log(result);



//String interpolation  escape seqience and trenary operator all are used.  includes() function return true or false if the word is present in the string
const new_sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${new_sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"