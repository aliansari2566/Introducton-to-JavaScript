function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


const loadScript = (src, Callback) => {
  let script = document.createElement("script");
  script.src=src;
  script.onload = function (){
    console.log("loaded script with src " + src);
    Callback(null , src);
  }

  
}

const hello = (error,src )=>{
if(error){
  
}


}



  // callback hell & pyramid of doom ----------------------------



