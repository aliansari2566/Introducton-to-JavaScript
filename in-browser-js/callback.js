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
 

   