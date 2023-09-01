let crick1={
    fName:"Rahul",
    lName:"Dravid",
}

// crick1.welcome=welcome

// function welcome(){
//     console.log(`Welcome ${this.fName} ${this.lName}`);
// }

function welcome(email,age,...args){
    console.log(`Welcome ${this.fName} ${this.lName}
    Email ${email}
    Age ${age} ${args}`);
}

// crick1.welcome();
welcome.call(crick1,"rdrocks@gmail.com",54);

Function.prototype.myCall=function(obj,...args){ // collecting the arguments in an array using rest parameter
    let foo=this; //this->welcome
    // console.log(foo);
    // console.log(obj);
    console.log(args);
    obj.fn=foo;
    obj.fn(...args); //spread the arguments 
    delete obj.fn // we delete fn from our crick1 object because we dont want it to be a permanent change. we did it to just call the function, 
}

welcome.myCall(crick1,"rdrocks@gmail.com",54) //method call this->welcome 
// console.log(crick1);

Function.prototype.myAplly=function(obj,args){ // collecting the arguments in an array using rest parameter
    let foo=this; //this->welcome
    // console.log(foo);
    // console.log(obj);
    console.log(args);
    obj.fn=foo;
    obj.fn(...args); //spread the arguments 
    delete obj.fn // we delete fn from our crick1 object because we dont want it to be a permanent change. we did it to just call the function, 
}

welcome.myAplly(crick1,["rdrocks@gmail.com",54]) 

//polyfill for bind 
Function.prototype.myBind=function(...args){
    const fn=this; //this->welcome
    console.log(args);
    let obj=args.slice
    return function(...args2){
        fn.call(obj,...args,...args2)
    }
}

const returnedFn=welcome.myBind(crick1,"rdrocks@gmail.com",54);
returnedFn();
returnedFn("hello","world");




