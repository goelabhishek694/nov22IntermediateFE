//6 static methods i Promise class

// *********************Promise.all()**************************

// let p1=new Promise(resolve=>setTimeout(()=>resolve("p1 resolved"),3000));
// let p2=new Promise((resolve,reject)=>setTimeout(()=>resolve("p2 rejected"),2000));
// let p3=new Promise(resolve=>setTimeout(()=>resolve("p3 resolved"),1000));

// p1.then(d=>console.log(d))
// p2.then(d=>console.log(d))
// p3.then(d=>console.log(d))
//it needs all the promises to be fuflfilled , if eeven one of the promise gets rejected, then i do not receive an array of results. 
//execution start parelley for each promise 
// console.time()
// let allPromise=Promise.all([p1,p2,p3])

// allPromise
// .then(d=>console.log(d))
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.timeEnd()

// })

// let urls = [
//     'https://api.github.com/users/goelabhishek694',
//     'https://api.github.com/users/deepakv3108',
//     'https://api.github.com/users/Marzooq13579'
//   ];


//   let allRequests=urls.map(url=>fetch(url));
//   console.log(allRequests);

//   let allResponse=Promise.all(allRequests);
//   allResponse.then((d)=>{

//   })


















// Promise.resolve()
// Promise.reject()
// Promise.allSetlled()
// Promise.race()
// Promise.any()