// console.log("Hello");

// function makeid(length) {
//     let result = '';
//     const characters = 'SWG';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

// console.log(makeid(1));



let b = document.body
console.log("First child of b: " + b.firstChild);
console.log("First Element Child of b: " + b.firstElementChild);

const changebgcolor =(() =>{
  document.body.firstElementChild.style.background = "red"
  } )

  // let arr3 = arr2.reduce((num1,num2)=>{

  //      return num1 * num2;
  //    })
  //    console.log(arr3);

  console.log(document.getElementsByTagName("li"));
  
  console.log(document.querySelector("nav").getElementsByTagName("li")); // nav bar k andr search kry ga li tag poara ha k nhi or return kr de ga


  //----------------------------------Methods to search dom matches, closest and contains -------------------------------------------

  