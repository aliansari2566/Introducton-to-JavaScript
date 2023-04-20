let myPromise = new Promise((myResolve, myReject) =>{
    setTimeout(function() { 
        
      console.log("resolved after 2 sec"); }, 2000);

      myResolve(56);
  });

  myPromise();