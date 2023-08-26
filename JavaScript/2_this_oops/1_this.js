// var a=10;
// let b=100;
// console.log(this); //window
// console.log(window.a);
// console.log(a);
// console.log(this.a);
// console.log(b);
// console.log(window.b);

// ***************ques1**************
// var firstName="Tommy";
// let dog={
//     firstName:"Pluto", //property
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//     } //method
// }

// dog.sayHi(); //method call
// let greet=dog.sayHi;
// greet() //function call


// ***************ques2**************

// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         function inner(){
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() //this->window
//     }
// }

// dog.sayHi();

// ***************ques3**************

// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         const inner=()=>{ //arrow function
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() //this-> dog
//     }
// }

// dog.sayHi(); 
// sayHi this->dog
// this->this of sayHi -> dog
// arrow functiond do not have their own this, their this points to their parent's this

// ***************ques4**************
// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     arrowSayHi:()=>{
//         console.log(`${this.firstName} says hi `)
//         const inner=()=>{ //arrow function
//             console.log(`${this.firstName} says hi `)
//         }
//         inner() //this-> dog
//     }
// }

// dog.arrowSayHi(); 


// ***************ques5**************
// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         const inner=()=>{ //arrow function
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() //this-> dog
//     }
// }

// dog.sayHi(); 


