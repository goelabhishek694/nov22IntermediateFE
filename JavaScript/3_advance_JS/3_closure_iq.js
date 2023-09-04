// Q1_1
// function outer() {
//     let arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


// function outer() { 
//     let arrFn = [];
//     let i=0;
//     for ( i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


// function outer() { 
//     let arrFn = [];
//     let a=100;
//     for ( let i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//             console.log(a);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

