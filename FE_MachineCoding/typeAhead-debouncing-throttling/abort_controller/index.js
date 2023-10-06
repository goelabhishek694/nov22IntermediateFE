//web api 
//1 create an instance 
const controller =new AbortController();
// (async function(){
//     try{
//         //2 attach a signal to our fetch request
//         const responsePromise=fetch(`https://restcountries.com/v3.1/name/india`,{signal:controller.signal});
//         //3 we call abort function 
//         console.log("request is sent");
//         controller.abort();
//         let res=await responsePromise;
//         let data=await res.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// })()


//  implement -> request timeout -> response -> 2sec -> abort it 

setTimeout(()=>{controller.abort()},200);
async function getRes(){
    try{
        const responsePromise=fetch(`https://restcountries.com/v3.1/name/india`,{signal:controller.signal});
        console.log("request is sent");
        let res=await responsePromise;
        let data=await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
        console.log(err.message)
        console.log(err.name)
        if(err.name=="AbortError"){
            console.log("request took too long to respond");
        }
    }
}

getRes();