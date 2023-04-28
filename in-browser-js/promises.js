// promise chain 

let myPromise = new Promise((Resolve, myReject) =>{
    setTimeout(function() { 

      console.log("resolved after 2 sec"); 
      Resolve(56);
    }, 2000);

    
  });

 myPromise.then((value) =>{
    console.log(value);

    let p2 = new Promise((Resolve, myReject) =>{
       
    
          Resolve("p2");;
    
    
      });
      return p2;
 }).then((value)=>{

    console.log("we are done");
 })

 // promise chain  End


 
//  Multipule handlers in promise 
