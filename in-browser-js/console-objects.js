console.log(console); // it will print all the console methods like log() assert() error() so on....

console.log("hi ali"); // in console it will return undefined 


let age = parseInt(prompt('Enter the value ')); 

const candrive = (()=>{
    return age > 18 ? true:false;
})

if (age<0) {
    console.error("invalid age");

}
if (candrive(age)) {
    alert('you can drive')
} 
else{
    alert('you can  not driver')
}
