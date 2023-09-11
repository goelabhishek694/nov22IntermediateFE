
//async 

// async function foo(){
//     return 1;
// }

// let p=foo()
// p.then((data)=>{
//     console.log(data)
// });


//await 
//await keyword can only be used inside an async functionn 
//await keyword makes JS wait until promise settles and returns its result
// let value=await promise;
// console.log("after");
// async function f(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("you have been hired"),2000)
//     });
//     let result=await promise; //at this line function execution stops 
//     console.log(result);
//     for(let i=0;i<5;i++){
//         console.log(i)
//     }
// }
// f()
// console.log("before");


// fetch()
// fetch is a browser API which helps us to get/send some data from/to the server 
// used to make an API call 
//it is a promise based api


const url="https://api.github.com/users/goelabhishek694"
// let getResponsePromise=fetch(url);
// getResponsePromise
// //extracting my data
// .then((resp)=>{
//     console.log(resp);
//     return resp.json()
// })
// .then((data)=>{
//     console.log(data)
//     let imageUrl=data.avatar_url;
//     let imgTag=document.createElement("img");
//     imgTag.src=imageUrl;
//     document.body.append(imgTag);

//     //remove the dp after 3 sec
//     setTimeout(()=>{
//         imgTag.remove();
//     },3000)
// })

async function getDP() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        let imageUrl = data.avatar_url;
        let imgTag = document.createElement("img");
        imgTag.src = imageUrl;
        document.body.append(imgTag);

        //remove the dp after 3 sec

        setTimeout(() => {
            imgTag.remove();

        }, 3000)

        return "done"
    }
    catch (err) {
        console.log(err);
    }
    finally{
        console.log("function was called")
    }
}

let returnedP = getDP()
returnedP.then(d => console.log(d))


// let resp=await fetch("https://api.github.com/users/goelabhishek694");
// console.log(resp);

//error handling in async await 



function foo(){
    try{
    let a=10;
    }
    catch(err){
        console.log(err);
        //we need to send it for monitoring 
    }
}









