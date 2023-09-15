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


//fetch no. of followers
let urls = [
    'https://api.github.com/users/goelabhishek694',
    'https://api.github.com/users/deepakv3108',
    'https://api.github.com/users/Marzooq13579'
  ];




// let responsePromise1=fetch(urls[0]);
// responsePromise1
// .then((resp)=>resp.json())
// .then((d)=>console.log(d.name))
// .catch(e=>console.log(e))

// let responsePromise2=fetch(urls[1]);
// responsePromise2
// .then((resp)=>resp.json())
// .then((d)=>console.log(d.name))
// .catch(e=>console.log(e))

//give me name of user along if the followers are greater than 200 
// let responsePromise3=fetch(urls[0]);
// responsePromise3
// .then((resp)=>resp.json())
// .then((d)=>{
//     console.log(d.name);
//     if(d.followers>200){
//         //take some time 
//         return new Promise((resolve)=>{
//             setTimeout(()=>resolve(d),2000)
//         })
//     }
// })
// .then(data=>
//     {
//         if(data)
//         console.log(data.name)
//     })
// .catch(e=>console.log(e))
const freeApi=["https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/2","https://jsonplaceholder.typicode.com/todos/3"]
//   let allRequests=freeApi.map(url=>fetch(url));
//   console.log(allRequests);

//   let allResponse=Promise.all(allRequests);
//   allResponse.then((d)=>{
//     console.log(d);
//     let fetchDataArr=d.map(respPromise=>respPromise.json());
//     return Promise.all(fetchDataArr)
//   }).then(arr=>{
//     arr.map((obj)=>console.log(obj))
//   })


//IQ
// let p=setTimeout(()=>{console.log("yaya")},2000)
// console.log(p);

//Promise.resolve

// let promise=new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// return promise

// return Promise.resolve("hello");

// Promise.reject

// let promise=new Promise((resolve,reject)=>{
//     reject("err")
// })
// return promise

// Promise.reject("err")



// let p=Promise.resolve("hello");
// console.log(p); //object -> state result 
// p.then(d=>console.log(d));


// let p=Promise.reject("file not found");
// console.log(p); //object -> state result 
// p.then(d=>console.log(d))
// .catch((e)=>console.log(e))


//Promise.race-> settled -> buzzer game
let p3=new Promise((resolve,reject)=>setTimeout(()=>resolve("p3 resolved"),2000));
let p1=new Promise((resolve,reject)=>setTimeout(()=>resolve("p1 resolved"),2000));
let p2=new Promise((resolve,reject)=>setTimeout(()=>reject("p2 rejected"),1000));
let promiseArr=[p1,p2,p3];

// let racePromise=Promise.race(promiseArr);

// racePromise.then(winner=>console.log("yaya",winner))
// .catch(err=>{
//     console.log("hello",err)
// })


// Promise.any()-> any -> school race 

let anyPromise=Promise.any(promiseArr);
anyPromise
.then(winner=>console.log("yaya",winner))
.catch(err=>console.log("hello",err))
.then(()=>console.log("yolo"))


