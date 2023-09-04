// var varname=10;
// function b(){
//     console.log(varname);
// }
// function fn(){
//     var varname=20;
//     b();
//     console.log(varname);
// }
// fn();


//closures

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// x();


// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a++;
//     return y
// }
// var z=x();
// console.log(z);
// z();

function createCounter(init, delta) {
    // var a=init;
    // var b=delta;
    function count() {
        init=init+delta;
        // a = a+b;
        // console.log(init);
        // console.log(delta);
        // return a;
        return init;
    }
    return count;
}
let c1 = createCounter(10, 5); 
let c2 = createCounter(5, 2);

// console.log(c1())
// console.log(c2())
// console.log(c1()) 
// console.log(c2())


//nested closures

let iamINGEC = 200;
function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`); //closures
            console.log("Hi GEC", iamINGEC) //scope chaining
        }
    }
}

// const fnName=getFirstName("Abhishek");
// console.log(fnName);

// const lName=fnName("Goel");
// console.log(lName);

// lName();


// getFirstName("Abhishek")("Goel")()

console.log("before");
var a=100;
function cb(){
    console.log("i am called after 2 sec",a);
}
setTimeout(cb,2000);
console.log("after");


