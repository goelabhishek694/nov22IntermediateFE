//var -> global / function scoped 
// var a=10;
// function foo(){
//     var b=100;
//     console.log(b);
//     console.log(a);
// }
// console.log(b);
// foo();
// console.log(a);

//let,const ->block scoped
// let a=10;
// { // this is know as a block 
// console.log(a); //10
// let b=100;
// console.log(b); //100
// }
// console.log(a); ///10
// console.log(b); //error

// function scope vs block scope 
// function foo(){
//     let b=100;
//     {
//         var a=10;
//         let c=1000;
//         console.log(a); //10
//         console.log(b); //100
//         console.log(c); //1000
//     }
//     console.log(a); //10
//     console.log(b);//100
//     console.log(c);//error
// }

// foo()



//scope_chaining, lex_env
// var b=10;
// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// a();
// console.log(b);
