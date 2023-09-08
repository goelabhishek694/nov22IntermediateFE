const fs = require('fs');
function promiseRead(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function (err, val) {
            if (err) {
                reject(err)
            }
            else {
                resolve(val)
            }
        })
    })
}

const readFilePromise = promiseRead('./f1.txt');
readFilePromise.then((data) => {
    console.log(data + "");
})
readFilePromise.catch(err => console.log(err))


// function foo(n1,n2){
//     return n1-n2
// }

// foo(20,10)
// foo(2,10)


function A(){}
function B(){}

A.prototype=B.prototype={};
let a=new A();
console.log(a instanceof B);