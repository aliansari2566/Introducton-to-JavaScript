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


let newPromise = new Promise((Resolve, myReject) =>{
    setTimeout(() =>{ 
  
    myReject(new Error("this is not acceptable"))
      Resolve(56);
    }, 2000);
  
  });
  newPromise.then(()=>{
  
    console.log("iam first handler"); 
  })