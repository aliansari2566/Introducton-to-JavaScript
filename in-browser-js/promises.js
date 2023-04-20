let myPromise = new Promise((Resolve, myReject) =>{
    setTimeout(function() { 

      console.log("resolved after 2 sec"); }, 2000);

      Resolve(56);
  });

 myPromise.then((value) =>{
    console.log(value);

    let p2 = new Promise((Resolve, myReject) =>{
       
    
          Resolve("p2");;
    
    
      });
      return p2;
 })