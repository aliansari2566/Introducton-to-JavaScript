
const prompt = require("prompt-sync")();
// js switchs

let iname = prompt("Enter an item name > ");

let a=prompt("Enter your age > ");

switch (iname) {
  case 'bottle':
    console.log('bottle is $0.59 a pound.');
    break;
  case 'lcd':
    console.log('lcd is $20.59 a pound.');
    break;
  case 'pen':
    console.log('pen is $1.59 a pound.');
    break;
    case 'shoes':
      console.log('shoes are $16.59 a pound.');
      break;

    default:
    console.log('this item is not available');
    break;
}

console.log("you can", a<18? "not drive" : "Drive" )