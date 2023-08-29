//default parameter
// function foo(p1,p2,p3="bye"){
//     console.log(p1,p2,p3);
// }

// foo("hello","world");
// foo("hello","world","hey");

//spread operator 

// let arr=[10,20,30,40];
// let arr2=[...arr,50];
// console.log(arr2);

//merge arrays 
// let arr1=[10,20,30,40];
// let arr2=[50,60,70];
// let mergedeArr=[...arr1,...arr2];
// console.log(mergedeArr);
// arr1.push(...arr2);
//arr1.push(arr2); // this will make a 2d array i.e array inside array 
// console.log(arr1);

//cloning
// let arr=[10,20,30,40];
// let arr2=[...arr];
// console.log(arr2);
// arr[1]=200;
// console.log(arr, arr2);

// string to array -> IQ
// const str="Scaler";
// const strToArr=[...str];
// console.log(strToArr);

//ques
// let arr=[10,20,[30,40],50];
// arr2=[...arr];
// arr[2][0]=200;
// console.log(arr);
// console.log(arr2);


//rest parameter
//...
//how to cope up with when we do not know th number of parameters that a function is going to be called with 
function foo1(p1,p2,p3,p4,p5,p6){
    console.log(p1,p2,p3,p4,p5,p6);
}
foo1("Hello","Scalerians","how","are","you","?");

function foo2(p1,p2,...haathi){
    console.log(...arguments);
    console.log(p1,p2,haathi);
}
foo2("Hello","Scalerians","how","are","you","?");


