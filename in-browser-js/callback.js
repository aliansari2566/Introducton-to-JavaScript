function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


const loadScript = (src , callback) => {
  let script = document.createElement("script");
  script.src=src;
  script.onload = function (){
    console.log("loaded script with src " + src);
    Callback(null , src);
  }
document.body.appendChild(script);
  
}

const hello = (error,src )=>{
if(error){
  console.log(error);
  return
}
else{
  alert("Hello world" + src)
}
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" ,hello)


  // callback hell & pyramid of doom ----------------------------



