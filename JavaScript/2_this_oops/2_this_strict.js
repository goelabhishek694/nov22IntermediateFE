'use strict'
// var a=10; //global 
// // b=100;    //global 

// function fun(){
//     var x=200; //function scoped
//     {
//         z=300; //global
//     }
// }
// fun()

// // console.log(x);
// console.log(z);
//in case of strict mode, 
// if function call , this-> undefined 
// ***************ques1**************
// var firstName="Tommy";
// let dog={
//     firstName:"Pluto", //property
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//     } //method
// }

// dog.sayHi(); //method call, this->dog
// let greet=dog.sayHi;
// greet() //function call, this->ud

// ***************ques2**************

// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         function inner(){
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() // this->ud
//     }
// }

// dog.sayHi();// this->dog

// ***************ques3**************
// let dog={
//         firstName:"Pluto",
//         sayHi:function(){
//             console.log(`${this.firstName} says hi `);
//             const inner=()=>{ //arrow function
//                 console.log(`${this.firstName} says hi `);
//             }
//             inner() //this-> dog
//         }
//     }
    
//     dog.sayHi(); 

// ***************ques4**************
var firstName="Tommy";
let dog={
    firstName:"Pluto",
    arrowSayHi:()=>{
        console.log(`${this.firstName} says hi `)
        const inner=()=>{ //arrow function
            console.log(`${this.firstName} says hi `)
        }
        inner() //this-> this of dog i.e. window
    }
}

dog.arrowSayHi(); 










