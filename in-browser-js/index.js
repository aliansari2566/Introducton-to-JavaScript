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

  