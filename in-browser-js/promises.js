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

// Multipule handlers in promise end


// ------------  how to execute a promise after compeletion of all other promises together --------------

console.log(" execute a promise............. "+ '\n');

let p3 = new Promise((Resolve, myReject) =>{
  setTimeout(function() { 
    Resolve("p3");
  }, 3000);

});
let p4 = new Promise((Resolve, myReject) =>{
  setTimeout(function() { 
    Resolve("p4");
  }, 4000);

});
let p5 = new Promise((Resolve, myReject) =>{
  setTimeout(function() { 
    Resolve("p5");
  }, 5000);

});

// let all_promise = Promise.all([p3, p4, p5]);  

Promise.all([p3, p4, p5]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
  let p6 = new Promise((Resolve, myReject) =>{
       
    
    Resolve("p6");;


});
return p6;
}).then((value)=>{

  console.log("iam promise 6 executing affter all previous");
})