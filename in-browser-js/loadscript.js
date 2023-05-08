const loadScript = async(src) => {

    return Promise = new Promise((Resolve, myReject) =>{
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

// const main = async () =>{

// console.log(new Date().getMilliseconds);
// let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" )
// console.log(a);
// console.log(new Date().getMilliseconds);
// }
// main();
