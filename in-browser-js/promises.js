let myPromise = new Promise((myResolve, myReject) =>{
    setTimeout(function() { 

      console.log("resolved after 2 sec"); }, 2000);

      myResolve();
  });

 myPromise.then((value) =>{
    console.log(value);
 }).catch(()=>{
    console.log("an error occour");
 })