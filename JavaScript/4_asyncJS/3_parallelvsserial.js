const { log } = require('console');
const fs = require('fs'); //node module -> gives us power to read files, copy , delte , move, create 
//relies on cb to periofrm async operations

// we executed our code synchronously
// console.log("before");
// let data=fs.readFileSync('./f1.txt');
// console.log(data+"");
// console.log("after");
//we execute our code asynchronously
// console.log("before");
// fs.readFile('./f2.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data+"");
//     }
// });
// console.log("after");


//i have 2 files, read rthose files and i want data of f1 to be printed then of f2 to be printed 

//this blocked the main thread
//this perofrm serial task 
// let f1=fs.readFileSync('./f1.txt');
// let f2=fs.readFileSync('./f2.txt');
// console.log(f1+"     "+f2);


//does not block the main thread
// actions are performed serailly
console.log('before');
fs.readFile('./f1.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data + "");
        fs.readFile('./f2.txt', function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data + "");
                fs.readFile('./f3.txt', function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(data + "");
                        fs.readFile('./f4.txt', function (err, data) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(data + "");
                            }
                        })
                    }
                })
            }
        })
    }
})
console.log("after");

//does not block the main thread
// actions are performed parallely

// console.log('before');
// fs.readFile('./f1.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data+"");
//     }
// })

// fs.readFile('./f2.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data+"");
//     }
// })

// console.log("after");