function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


  // ------------ load script with out callback  simple---------------

  const loadScript1 = (src ) => {
    let script = document.createElement("script");

    script.src=src;

    // using built-in function onload() to know that script is upload -------
    script.onload = function (){   
      console.log("loaded script1 with src " + src);   
    }
   
  document.body.appendChild(script);
    
  }

  loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" )



  // ------------ load script with out callback ---------------

// one more example of callback -------------

const gift =()=>{
setTimeout(() => {  // pr ye jo anonymous function pass kia ha settime out mein ye 3000 second bad run hoga  ga or is se phly gitf() wala function run ho chuka hoga us
  const get_gift="🎁";
console.log("got the gift" + get_gift);
 return gift; bur this line will not return gift function ne 3000 seconds k bad gift ki value return krni hai abhi kch bhi nhi retunr kry ga apka gift ka function to foran execute hojye
}, 3000);
}










// one more example of callback -------------



// ------------ load script with out callback  simple---------------

const loadScript = (src , callback) => {
  let script = document.createElement("script");
  script.src=src;
  script.onload = function (){
    console.log("loaded script with src " + src);
    callback(null,src);// we have to pass src to our callback funtion other wise hello function will not alert any script
  }
   document.body.appendChild(script);
  
}

const hello = (error,src ) => {
if(error){
  console.log(error);
  return
}
else
  alert("Hello world" + src)

}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" ,hello)


  // callback hell & pyramid of doom ---------------------------- 
  //The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell.
  //The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”



  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" , hello = (error,src ) => {
    if(error){
      console.log(error);
      return
    }
      alert("Hello world" + src)
    
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" , hello = (error,src ) => {
          if(error){
            console.log(error);
            return
          }
            alert("Hello world" + src)


            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" , hello = (error,src ) => {
            if(error){
              console.log(error);
              return
            }
              alert("Hello world" + src)
            
            })
      
       })
    })



// -------------------------END---------------------------------- //
 

   