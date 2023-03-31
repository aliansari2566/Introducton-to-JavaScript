// HTML Insertion Methods 

let a = document.getElementsByTagName('div')[1];
a.innerHTML = a.innerHTML + '<h1>Hello world! </h1> '



//vanila javscript 
const element = document.getElementById('div');
element.innerHTML = 'Hello, world';

//jquery
$('div').text('Hello, world');