
let str1 = "this is a string programmers often like to avoid comple";







// const MaxOccurring_ =(Str)=>{  
//     const map={}
//     for(let i=0 ;i<str.length ; i++){
//    
    
//     }
    
    
//}

// console.log("Max occurring character is: " + MaxOccurring_(str));

let str = "saemeple strinng 1233322 124./;'";

const MaxOccurring = (Str)=>{
const map = new Map()
str.split("").forEach(element => {
    map[element]=map[element]?map[element]+1:1;
    // console.log(element);
});

let char = str[0];
let max =1;

  for (let i in map) {
    // console.log("map " + i + " " + map[i]);
 
    if (i !== '' && map[i] > max) {
    
        max =map[i]
        char =i;
    }
    // else if(map[i] > max){
      
    //     max =map[i]
    //     char =i;
    // }
  
  }

// return char,max;
console.log(" max occurring char = " + char + " occurance = "+ max);


}
 MaxOccurring (str);
// console.log(max_char);


// more than 2 character with the maximum occurrence  

// const MaxOccurring = (str) => {
//   const charCounts = new Map();
//   let maxCount = 0;
//   let maxChars = [];

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     charCounts.set(char, (charCounts.get(char) || 0) + 1);

//     const count = charCounts.get(char);

//     if (count > maxCount) {
//       maxCount = count;
//       maxChars = [char];
//     } else if (count === maxCount) {
//       maxChars.push(char);
//     }
//   }

//   console.log("Max occurring char(s): " + maxChars.join(', '));
//   console.log("Occurrence count: " + maxCount);
// };

// const str1 = "saemeple strinng  vvv./;'";
// MaxOccurring(str);




