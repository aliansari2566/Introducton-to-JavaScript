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

const main = async () =>{

console.log(new Date().getMilliseconds);
let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" )
console.log(a);
console.log(new Date().getMilliseconds);
}
main();


let p1 = async()=>{
    return new Promise((Resolve, myReject) =>{

        setTimeout(() =>{ 
          Resolve("p1");
        }, 1000);
        
      
      });
}

let p2 = async()=>{
    return new Promise((Resolve, myReject) =>{

        setTimeout(() =>{ 
          Resolve("p2");
        }, 2000);
        
      
      });
}
let p3 = async()=>{
    return new Promise((Resolve, myReject) =>{

        setTimeout(() =>{ 
          Resolve("p3");
        }, 3000);
        
      
      });
}


const run = async ()=>{
 await p1()
 await p2()
 await p3()

}