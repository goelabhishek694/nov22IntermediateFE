// create
localStorage.setItem("name",JSON.stringify({"name":"Abhishek"}));
//read
var data=localStorage.getItem("name");
console.log(data);
console.log(data.name); //ud
console.log(typeof data); //string
console.log(JSON.parse(data).name);


// //update
// localStorage.setItem("name","Shubham");
// var data=localStorage.getItem("name");
// console.log(data);

// //length prop
// console.log(localStorage.length);

// //delete 
// localStorage.removeItem("name");
// //this will clear entire LS 
// localStorage.clear();


