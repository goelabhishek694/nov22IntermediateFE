console.log("before");
function cb (){
    console.log("i was called back");
}
setTimeout(cb,5000); //sous chef is looking after my dal 
function printNum(n){
    for(let i=0;i<=n;i++){
        console.log(i);
    }
}

printNum(10); //main chef focuses on other work
console.log("after");  

function f1(){}
function f2(){}
f1()
f2()


//synchronous code 
function a(){
    console.log("hello");
}
a();
console.log("world");


