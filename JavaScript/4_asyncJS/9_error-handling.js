// new Promise((resolve, reject) => {

//     throw new Error("Whoops!");
//     // reject("Whooops!")
//     // resolve("Yipeeees!")
    
//   }).catch(function(error) {
  
//     console.log("The error is handled, continue normally");
//     return "err"
//     // return new promiseArr((resolve,reject)=>{
//     //     resolve("err")
//     // })
//     // return Promise.resolve("err")
//   }).then((str) => {
//     if(str=="err"){
//         console.log("call next api")
//     }
//     console.log("Next successful handler runs")
//     throw new Error("error in api")
// }).catch(e=>{
//     console.log(e);
// })
// .then(()=>console.log("function execution resumes"))







// console.time()

// function resolveAfterNSeconds(delay, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, delay);
//     });
// }

// (function () {

//     let a = resolveAfterNSeconds(1000, 1)
//     a.then(async function (x) {
        
//         let y = await resolveAfterNSeconds(2000, 2) 
//         let z = await resolveAfterNSeconds(1000, 3) 
//         let p =  resolveAfterNSeconds(2000, 4);
//         let q =  resolveAfterNSeconds(1000, 5);

//         console.log(x + y + z +  await p + await q);
//         console.timeEnd()
//     })
// })()

Promise.reject("hello")
.finally(()=>console.log("finally in starting"))
.then(d=>{
    console.log("in then ",d);
    return d
})
.catch(e=>{
    console.log("in catch ",e);
    return e
})
//finally does not take any arguments
.finally((d)=>console.log("finally end",d))








