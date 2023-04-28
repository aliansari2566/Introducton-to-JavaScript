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

let newPromise = new Promise((Resolve, myReject) =>{
  setTimeout(() =>{ 

    console.log("resolved after 2 sec"); 
    Resolve(56);
  }, 2000);

});
newPromise.then(()=>{

  console.log("iam first handler"); 
})
newPromise.then(()=>{

  console.log("iam second handler"); 
})

newPromise.then(()=>{

  console.log("iam another handler and i can do any task"); 
})