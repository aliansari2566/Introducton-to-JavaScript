

// Javascript program to swap two
    // numbers without using temporary
    // variable
  
    let x = 10, y = 5;
    console.log("Before Swapping: x = " + 
        x + ", y = " + y);
  
    // Code to swap 'x' and 'y'
  
    // x now becomes 15
    x = x + y;
  
    // y becomes 10
    y = x - y;
  
    // x becomes 5
    x = x - y;
  
    console.log("After Swapping: x = " + 
        x + ", y = " + y);


// arrow function syntax

const sum =(a ,b) => {
    return a+b;
}

let answer= sum(10,3);
console.log(answer);

// arrow function without arguments

const hello =() => {
  console.log("i'm practicing js you have to write some code if you want learn");

}
hello();