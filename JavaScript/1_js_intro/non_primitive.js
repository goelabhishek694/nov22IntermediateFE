//Array
var a=[];
console.log(typeof a);
var b=new Array();
// console.log(a);
// console.log(b);


var a=[10,20,30,40];
// console.log(a.length); 
console.log(Array.isArray(a));
var a=[1,2,"hello",true];
// console.log(a);
// console.log(a[3]); // true

var x=[1,2,3];
// console.log(x); //-> [] ? 

//1. 
// x=[];
// console.log(x);
//2. 
// x.length=0;
// console.log(x);
//3. 
var y=x;
// x.pop(); // to remove from last
// console.log(x);
// console.log(y);

// x=[]; //-> x is now pointing to a new mem loc
console.log(x);
console.log(y);

x.length=0;

console.log(x);
console.log(y);

var arr=[1,2,3,4,5,1,3,4,5];
var idx=arr.indexOf(41);
console.log(idx);

var arr=["Hello","how","are","you"];
let ans=arr.join(" ");
console.log(ans);

arr.push("?"); // to push at last 
console.log(arr);
//unshift -> adds first ele from arr
arr.unshift('Hey');
console.log(arr);
//shift -> removes first ele from arr 
arr.shift();
console.log(arr);

//Functions -> are step by step guide to complete a task 
//function declaration, function definition
function foo(){
    console.log(1);
}
//function call/invoke
foo();
console.log(typeof foo);
//function expression
var a=function(){
    console.log(10);
}
a();

//functions can be passed as arg
function abc(fn){
    fn();
}
abc(function(){console.log("i am called")})

//if some conditon -> abc() -> cb
// document.getElementById('btn').addEventListener('click',abc)

function fun(param){
    console.log('hello',param);
    return 
    'bye';
}
var val=fun()
console.log(val);


//Objects -> help us store information 

var dog={
    name:"Pluto",
    breed:"Spitz",
    //nested object
    owner:{
        name:"Shubham",
        age:20
    },
    "male":true,
    "a":"yyo",
    greets:function(){
        console.log("bhow bhow")
    }
}
console.log(typeof dog);
console.log(Array.isArray(dog));
//dot notation
console.log(dog.name);
console.log(dog.owner.name);
//bracket notation
console.log(dog["name"]);
console.log(dog["owner"]["name"]);
var a='male';
console.log(dog[a]);
console.log(dog.a);

//traverse over objects
for(let key in dog){
    console.log(key, " -> ", dog[key]);
}

console.log(dog.greets); //print func
dog.greets(); //bhow bhow 

function fun(param1,param2){
    console.log('hello',param1,param2);
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
}
// var val=fun('world','i am ready');
var val=fun();
// console.log(val);








