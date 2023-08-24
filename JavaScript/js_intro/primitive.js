var str="Hello i love JS"; //string "",'' -> same thing
var name="Ribhu"
var str2=`hello ${name}
how
are you`; //string literals
// console.log(str);
// console.log(str2);
var isMale=true; //boolean
var val=10; //number
var x=undefined; //undefined -> it means that value is not defiend yet/ value is not present yet. 
var y=null; //null -> signifies empty value
//null is stored as an object in JS
// property->typeof

// console.log(typeof str);
// console.log(typeof isMale);
// console.log(typeof val);
// console.log(typeof x);
// console.log(typeof y); //object

var a=1;
var b='1';
//explicit type conversion of b to number
// ==-> matches the value both variables store
// if(a==b){
//     console.log('yes');
// }
// else console.log('no');

// === -> operator check the typeof both the varibales , and then their values
// if(a===b){
//     console.log('yes');
// }
// else console.log('no');

a=undefined;
b=null;
// if(a==b){
//     console.log('yes');
// }
// else console.log('no');
// if(a===b){
//     console.log('yes');
// }
// else console.log('no');