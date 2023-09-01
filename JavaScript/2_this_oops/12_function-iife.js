// functions are also object 
// object-> key value pair 

function foo(){
    console.log("Hi i am foo");
    foo.count++;
}
//property
// foo.count=0;
// foo();
// foo();
// foo();
// //method
// foo.showCount=function(){
//     console.log(`foo has been called ${this.count} times`);
// }
// foo.showCount();

//function is a type of special object that implements callable constructor 
// function is an object that can also be called 

// let a=[10,20,30];
// let b=a; //referrencing 

// const funcEx=function(){
//     console.log('i am a variba;e that is why funcExp stores my address');
// }

// funcEx();

// function fn(param){
//     console.log('i received a param',param);
//     if(typeof param==='function'){
//         param()
//     }
// }

// fn({name:"Pramod"});
// fn(foo);
//function which accepts function as parameter or return a function is know as higher order funciton 
function hof(param){
    console.log('i am an higher order function');
    return param;
}

let returedFn=hof(foo);
console.log(returedFn);
returedFn()



