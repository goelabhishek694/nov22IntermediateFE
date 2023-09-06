/************setTimeout, clearTimeout*********/
// console.log("Before");
// function cb() {
//     console.log("Settimouts cb has been called");
// }
// const timerID = setTimeout(cb, 3000);
// console.log(timerID);

// function canceller() {
//     console.log("Cancelling the timeout");
//     clearTimeout(timerID);
// }
// setTimeout(canceller, 2000);
// console.log("AFter");

/************setInterval, clearInterval*********/
// console.log("Before");
function cb() {
    console.log("Interval called ");
}
// const timerId = setInterval(cb, 2000);

// function cancelInterval() {
//     console.timeEnd();
//     console.log("cancelling the interval timer");
//     clearInterval(timerId);
// }
// console.time();
// setTimeout(cancelInterval, 5000);
// console.log("after");



/************ POLYFILL for setInterval, clearInterval*********/

console.log("before");
function mySetInterval(cb,delay){
    let obj={flag:true};
    function myFn(){
        if(obj.flag){
            cb();
            setTimeout(myFn,delay)
        }
    }
    setTimeout(myFn,delay)
    return obj;
}

function myClearInterval(obj){
    obj.flag=false;
}

let timerID=mySetInterval(cb,2000);
function clearCb(){
    myClearInterval(timerID)
}
setTimeout(clearCb,6000);
console.log("after");