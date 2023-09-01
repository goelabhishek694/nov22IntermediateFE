//slice
let arr=[10,20,30,40,50,60];
//starting at si ending before ei
                    //si,ei
// let slicedArr=arr.slice(2,5);
// console.log(slicedArr); //when u create a slice, original array/fruit remains intact. 
// console.log(arr); //original array is not altered/changed/modified

//startinf from 0 untill length of array 
// let arr2=arr.slice(0);
// console.log(arr2);

//whenever u see a negative , add length of array to it 
// let arr3=arr.slice(-2); 
// let arr3=arr.slice(4);
// console.log(arr3);

// let arr4=arr.slice(1,-1);
// console.log(arr4);


//Splice
const cars=["Mustang","Thar","Nano",'XUV700',"ferrari","aventador","series7"];
//removing elements
//si,count                         
// let splicedCars=cars.splice(2,5); //from index si remove count elemnts
// console.log(cars);
// console.log(splicedCars); //removed elements would be present i splicedArr

//replace
// let splicedCars=cars.splice(2,1,"Rolls-Royce"); //from index si remove count elemnts
// console.log(cars);
// console.log(splicedCars);

//adding
// let splicedCars=cars.splice(2,0,"Rolls-Royce","Range-Rover","Audi","Tesla"); //from index si remove count elemnts
// console.log(cars);
// console.log(splicedCars);

let arr2=[70,80,90];
let concatArr=arr.concat(arr2);
console.log(concatArr);
console.log(arr);
console.log(arr2);

//polyfill for concat 
Array.prototype.myConcat=function(arr){
    const arr1=this;
    let newArr=[...arr1,...arr];
    return newArr;
}

let myConcattedArr=arr.myConcat(arr2);
console.log(myConcattedArr);

//split
//takes a delimeter
let str = "Hi i am google";
let arrStr=str.split(" ");
console.log(arrStr);

//join -> join elemnts of array into a string using delimeter
let joinedStr=arrStr.join("+")
console.log(joinedStr);

//hello+how+are+you