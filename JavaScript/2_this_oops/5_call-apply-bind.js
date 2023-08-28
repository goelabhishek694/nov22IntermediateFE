let crick1={
    fName:"Rahul",
    lName:"Dravid",
    // welcome:function(){
    //     console.log(`Welcome ${this.fName} ${this.lName}`);
    // }
}

// crick1.welcome();

let crick2={
    fName:"MS",
    lName:"Dhoni",
}

let crick3={
    fName:"Kapil",
    lName:"Dev",
}

// crick2.welcome()

//call
//first access the mthod, then put call() and pass the obj you want "this" to point to 
//function borrowing
// crick1.welcome.call(crick2);
// crick1.welcome.call(crick3);

function welcome(email,age){
    console.log(`Welcome ${this.fName} ${this.lName}
    Email ${email}
    Age ${age}`);
}
// this-> arg present inside call, after the first argument, remianig args are cinsumed by function which is being called.
welcome.call(crick1,"rdrocks@gmail.com",54);
// welcome.call(crick2)
// welcome.call(crick3)

//apply
// is same as call but it takes array of arguments
welcome.apply(crick2,["msdrocks@gmail.com",42]);

//bind
// same as call,but it returns a function to be used later
const bindedFn=welcome.bind(crick3,'kd83@gmail.com',60);
bindedFn();



