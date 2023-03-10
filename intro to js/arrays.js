
// Array are mutable arrays can be chnaged

let array_of_marks = [78,82,98,'empty',true];

console.log(array_of_marks);// printing full array
console.log(typeof array_of_marks);

// printing array by index 

console.log(array_of_marks[0]);
console.log(array_of_marks[1]);
console.log(array_of_marks[2]);
console.log(array_of_marks[3]);
console.log(array_of_marks[4]);
console.log(array_of_marks[5]);// will be undefined because there is no index 5 in array


array_of_marks[5] = 89; // adding the new value to array 
console.log(array_of_marks[5]);


// we can change the value of an array on specific idnex

array_of_marks[2]=93;
console.log(array_of_marks[2]);


// type of array is an object so we can also use for of loop to print array
for(let key of array_of_marks) {
    console.log("marks " + key );
}

// Simple for loop
for (let i = 0; i < array_of_marks.length; i++) {
    console.log(array_of_marks[i]); 
    
}

// Array methods (Functions)

let num =[1,2,3,4,54];
console.log(typeof num);
let b = num.toString();
console.log(typeof num);
console.log(typeof b);


// Join() joins the array elements with operators
let c = num.join("->");
console.log(c);

// some methods of array which can change the same (existing ) array like pop() push() shift() unshift()

//works some both remove the element of array but pop() from last and shift() start 
console.log("array before pop() " + num);
num.pop();// pop returns the poped element of array (remove) the last element of the original array 
console.log("array after pop() " + num);

num.shift();// removes the first index od array
console.log(num);

//works some both remove the element of array but pop() from last and shift() start 


//works some both add the element of array but push() from last and unshift() start 
num.push(21)// pop returns the poped element of array (add) element at the last index(end) of the original array 
console.log(num);

num.unshift(83);
console.log(num);


