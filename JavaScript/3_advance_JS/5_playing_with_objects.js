let name="Pluto";
let breed="Labrador";

let dog={
    name,
    breed
}

// console.log(dog);


// let myDog=Object.create(null); //empty object
// myDog.name="Tommy"
// console.log(myDog);

//created an object ourDof by inheriting dog 
let ourDog=Object.create(dog);
ourDog.lastName="the planet";
// console.log(ourDog); 
//isprototypeof-> is parent of 
// console.log(dog.isPrototypeOf(ourDog)); //true 
// console.log(ourDog.isPrototypeOf(dog)); //false 

ourDog.friends=["Tommy","Scooby","Charlie"];
// console.log(ourDog);

//traversal
// for(let key in ourDog){
//     //if it is own property and not inherited 
//     let isMyKey=ourDog.hasOwnProperty(key);
//     if(isMyKey){
//         console.log(key);
//     }
// }
//creates an array of our object's keys
let dogProperties=Object.keys(ourDog)
// console.log(dogProperties); 

//creates an array of our object's keys
let dogValues=Object.values(ourDog)
// console.log(dogValues);

let emptyObj={};
// console.log(emptyObj);

//before es6
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayHi=function(){
//         console.log(`I am ${this.name} and i am ${this.age} years old`);
//     }
// }

// let mentor=new Person("Abhishek",34);
// //an empty obj is created ->{}
// //this->{}
// //mentor->{name,age}
// console.log(mentor);

// let mentor2=Person("Abhishek",34);
// console.log(mentor2);

//4
//after es6
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log(`I am ${this.name} and i am ${this.age} years old`);
    }
}

let mentee=new Person("Pramod",31);
// console.log(mentee);


class SuperHuman extends Person{
    constructor(name,age){
        super(name,age) //calls the constructor of my parents
        this.hobbies=['music','travel'] 
    }
}

let superMentee=new SuperHuman("Sanjeev",34);
// console.log(superMentee);

//prototype chaining 
let arr=[10,20,40];
// console.log(arr.__proto__.__proto__.__proto__);

// console.log(arr.proto)

arr.proto="hello";
// console.log(arr);
//arr.map -> would not be able to do this 

// get set methods 

// console.log(arr.length);
arr.x="bye";
arr[100]=45
arr["100"]=45;
// console.log(arr.length);
//ARR.LENGTH-> largest key in number +1
// console.log(arr[65]);



//object descriptors 

let obj={
    name:"Scaler"
}
obj.course=["DSA","DEV","Data Science"];
obj.duration="6months"
//WRITABLE

// let data=Object.getOwnPropertyDescriptor(obj,"name");
// console.log(data);

// obj.name="InterviewBit";
// console.log(obj);

// Object.defineProperty(obj,"name",{
//     writable:false
// });

// let data=Object.getOwnPropertyDescriptor(obj,"name");
// console.log(data);

// obj.name="Scaler";
// console.log(obj);

//ENUMNERABLE

// for(let key in obj){
//     console.log(key);
// }

Object.defineProperty(obj,"name",{
    enumerable:false,
    writable:false
})

// for(let key in obj){
//     console.log("after-> ",key);
// }

//3 ways to alter obj permissions 

let config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDb",
        user: "root",
        pwd: "admin"
    }
}

//mutation/changes that we can do on an obj
//CRUD
// console.log(config.appName);
// config.tempServer="scaler.com"
// config.appName="interviewbit.com"
// delete config.appName;
// console.log(config);

// ALL OF THE SETTING OF PREVENTEXTENSION SEAL AND FREEZE HOLD TRUE FOR FIRST LEVEL ONLY 

//**************preventExtensions**********/
//new property cannot be added
//can update 
//can delete 
// let notExtendableObject=Object.preventExtensions(config);
// notExtendableObject.tempServer="scaler.com"
// notExtendableObject.appName="interviewbit.com"
// delete notExtendableObject.appName;
// notExtendableObject.database.port=100
// console.log(notExtendableObject);


//Object.seal()
//can only update 
//cannot add 
//cannot delete 

// let notExtendableObject=Object.seal(config);
// notExtendableObject.tempServer="scaler.com"
// notExtendableObject.appName="interviewbit.com"
// delete notExtendableObject.appName;
// notExtendableObject.database.port=100
// delete notExtendableObject.database.port
// console.log(notExtendableObject);

//Object.freeze()
// cannot update
// cannot add
// cannot delete

// let notExtendableObject=Object.freeze(config);
// notExtendableObject.tempServer="scaler.com"
// notExtendableObject.appName="interviewbit.com"
// notExtendableObject.database.pwd="updatedpwd"
// delete notExtendableObject.appName;
// notExtendableObject.database.port=100
// delete notExtendableObject.database.port
// console.log(notExtendableObject);


if(0){
    console.log('yolo');
}
if(1){
    console.log('lol');
}
if(-0){
    console.log('xoxo');
}
if(-1){
    console.log('ooo');
}
if({}){
    console.log('ootd');
}
if(null){
    console.log('rofl');
}


















