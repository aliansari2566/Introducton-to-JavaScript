// HTML Insertion Methods 

let a = document.getElementsByTagName('div')[1];
// a.innerHTML = a.innerHTML + '<h1>Hello world! </h1> '


// let div = document.createElement('div');
// div.innerHTML + '<h3>Hi world! </h3> ';
// div.appendChild(div)

// //vanila javscript 
// const element = document.getElementById('div');
// element.innerHTML = 'Hello, world';

// //jquery
// $('div').text('Hello, world');





// insertAdjacentHTML, insertAdjacentElement and insertAdjacentText
first.insertAdjacentHTML('beforebegin','<span> Hi i\'m beforebegin </span> <br> ');
first.insertAdjacentHTML('afterbegin','<span>Hi i\'m afterbegin </span> <br> ');

