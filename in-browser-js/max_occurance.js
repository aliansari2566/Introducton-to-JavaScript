
// let str = "this sa string programmers often like to avoid complex code";
let str1 = "this is a string programmers often like to avoid comple";



let str = "sample str ing ";



// const MaxOccurring_ =(Str)=>{  // map empty hai 
//     const map={}
//     for(let i=0 ;i<str.length ; i++){
//     str.split("").map[i]=map[i]?map[i]+1:1;
//         console.log(map);
    
    
//     }
    
    
//}

// console.log("Max occurring character is: " + MaxOccurring_(str));



const MaxOccurring =(Str)=>{
const map= new Map()
str.split("").forEach(element => {
    map[element]=map[element]?map[element]+1:1;
    console.log(element);
});



}
MaxOccurring (str1)



