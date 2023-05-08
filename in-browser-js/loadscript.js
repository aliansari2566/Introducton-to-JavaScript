const loadScript = async(src) => {

    return myPromise = new Promise((Resolve, myReject) =>{
    let script = document.createElement("script");
    script.src=src;
    script.onload =  () =>{
      Resolve(src);
    }
    document.head.append(script)
    
  }) 


}

//Load script with promise
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" )
a.then( (value)=>{
console.log(value);
})


//Loading Script with  async await-----------------------------------

// const main = async () =>{

// console.log(new Date().getMilliseconds);
// let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" )
// console.log(a);
// console.log(new Date().getMilliseconds);
// }
// main();



// create a promise which rejects after 3 seconds use async/await to get its value use a try catch to handle error............

let P = () =>{


return newPromise = new Promise((Resolve, myReject) =>{
    setTimeout(() =>{ 
  
    myReject(new Error("this is not acceptable"))
     
    }, 3000);
  
  });
//   newPromise.then(()=>{
  
//     console.log("iam first handler"); 
//   })

}
let aa = async()=>{
    try {
        let c = await P()
        console.log(c);
    } 
    catch (error) {
        console.log("this error has been handled ");
    }

}
aa();

// create a promise which rejects after 3 seconds use async/await to get its value use a try catch to handle error............


