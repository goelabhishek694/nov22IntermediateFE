let dog1={
    //private properties
    firstname:"Pluto",
    sayHi:function(){
        console.log("hello");
    }
}

var dog2=new Object();
console.log(dog1);
console.log(dog2);

//dog2.sayHi(); //private method of dog1

dog1.hasOwnProperty()
dog2.hasOwnProperty()

//if you ant to create a constructor function, you name it with capital lettert 
function Dog(firstname,breed){
    this.firstname=firstname;
    this.breed=breed;
}

var myDog=new Dog("Pluto","Labrador");

console.log(myDog);

//public properties 
Dog.prototype.sayHi=function(){
    console.log('hello');
}

var tommy=new Dog("Tommy","Spitz");
var charlie=new Dog("Charlie","pitbull");

console.log(tommy);
console.log(charlie);

tommy.sayHi()
charlie.sayHi()

Array.prototype.myPush=function(){
    console.log("this is my implemtnation of push method in arr");
}

let arr=[1,2,3,4];
console.log(arr);
arr.myPush()

arr.hasOwnProperty()









