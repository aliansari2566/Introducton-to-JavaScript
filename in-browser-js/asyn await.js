// const loadScript = async(src) => {

//     return myPromise = new Promise((Resolve, myReject) =>{
//     let script = document.createElement("script");
//     script.src=src;
//     script.onload =  () =>{
//       Resolve(src);
//     }
//     document.head.append(script)
    
//   }) 


// }

// const main = async () =>{

// console.log(new Date().getMilliseconds);
// let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" )
// console.log(a);
// console.log(new Date().getMilliseconds);
// }
// main();


let p1 = async()=>{
    return new Promise((Resolve, myReject) =>{

        setTimeout(() =>{ 
          Resolve("p1");
        }, 2000);
        
      
      });
}

let p2 = async()=>{
    return new Promise((Resolve, myReject) =>{

        setTimeout(() =>{ 
          Resolve("p2");
        }, 1000);
        
      
      });
}
let p3 = async()=>{
    return new Promise((Resolve, myReject) =>{

        setTimeout(() =>{ 
          Resolve("p3");
        }, 3000);
        
      
      });
}

// this is fetching data one by one taking time it will take time
const run = async ()=>{
console.time("run");
 let a1 = await p1() //fetch first 10 products from database 
 let a2 = await p2() //etch another 10 products from database 
 let a3 = await p3()
 console.log(a1,a2,a3);
console.timeEnd("run") // it will take abouts 6 secs


}

run();

// now we will use promise.all to resovle all promises at  once
const prun = async ()=>{
    console.time("run1");
 let a1 = p1() //here we don't n
 let a2 = p2() 
 let a3 = p3()
 let P_all = await Promise.all([a1, a2, a3])
 console.log(P_all); // it will take abouts 3 secs half time of above
console.timeEnd("run1")


}
prun();