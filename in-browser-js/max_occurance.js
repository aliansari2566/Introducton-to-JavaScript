
let str1 = "this is a string programmers often like to avoid comple";







// const MaxOccurring_ =(Str)=>{  // map empty hai 
//     const map={}
//     for(let i=0 ;i<str.length ; i++){
//     str.split("").map[i]=map[i]?map[i]+1:1;
//         console.log(map);
    
    
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



