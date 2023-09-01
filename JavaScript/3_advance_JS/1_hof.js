let arr=[10,13,56,78,34,9,53]; //rates in USD


//give me an array of all the even numbers
// function isEven(arr){

//     let newArr=[];
//     // let newArr2=[];
//     // let newArr3=[];
//     for(let i=0;i<arr.length;i++){
//         let ele=arr[i];
//         if(ele%2==0){
//             newArr.push(ele);
//         }
//         // else if(ele%2!==0){
//         //     newArr2.push(ele)
//         // }
//         // else if(ele>25){
//         //     newArr3.push(ele);
//         // }
//     }
//     return newArr;
// }

// let evenArr=isEven(arr);
// console.log(evenArr);

// function isOdd(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         let ele=arr[i];
//         if(ele%2!=0){
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }
// let oddArr=isOdd(arr);
// console.log(oddArr);

function isEven(ele){
    return ele%2==0;
}

function isOdd(ele){
    return ele%2!=0
}

function isGreaterThan25(ele){
    return ele>25
}

function traverse(arr,logic){
    //create an array
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(logic(arr[i])){
            newArr.push(arr[i])
        }
    }
    //return our newArr
    return newArr;
}

let arr1=traverse(arr,isEven);
let arr2=traverse(arr,isOdd);
let arr3=traverse(arr,isGreaterThan25);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


//forEach
// we are goin to traverse over arr and access each ele 
// for each ele in an array a function is executed
let balanceSheet=[1000,-300,2000,4000,-1500];

let returnedArr=balanceSheet.forEach(function(ele){
    // console.log(ele);
    // return 100; foreach does not return anything 
})

// console.log(returnedArr);

//map
let usdToInr=balanceSheet.map(function(ele){
    return ele*85;
});
// console.log(usdToInr);

//filter
//show me all my expenses 
//show me all my earnings
function showExpenses(arr){
    let expenses=[]
    for (let i = 0; i < arr.length; i++) {
        const element = array[i];
        if(element<0){
            expenses.push(element);
        }
    }
    return expenses;
}

let myExpenses=balanceSheet.filter(function(ele){
    return ele<0;
})

// console.log(myExpenses);

//reduce 
//total balance in my account 
function sumAll(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum;
}

// let totalBalance=sumAll(balanceSheet);
// console.log(totalBalance);

let totalBalance=balanceSheet.reduce(function(acc,curr){
    console.log("acc: ",acc," curr: ",curr);
    return acc=acc+curr;
},0)//initial value of acc, if not given acc=arr[0]
console.log(totalBalance);

//composability 
// to view all the expenses in inr 

// [1000,-300,2000,4000,-1500]; -> [85000,-25500,170000,340000,-127500]->[-25550,-127500]
//**********variations in arrow functions ****************

// let arrowFn=p1=>{
//     //multiple line opeartions
//     return 
// }

// let arrowFn=p1=>p1*100
// let arrowFn=(p1,p2)=>{
//     //multiple line opeartions
//     return 
// }

// let arrowFn=()=>{
//     //multiple line opeartions
//     return 
// }


let expensesInInr=balanceSheet.map(ele=>ele*85).filter(ele=>ele<0)
console.log(expensesInInr);

//Interview Questions 
const worldCapitals = [
    {
      country: "India",
      capital: "Delhi",
      population: "2cr",
    },
    {
      country: "America",
      capital: "Washington DC",
      population: "6cr",
    },
    {
      country: "France",
      capital: "Paris",
      population: "2cr",
    },
  
    {
      country: "England",
      capital: "London",
      population: "4cr",
    },
    {
      country: "Germany",
      capital: "Berlin",
      population: "2cr",
    },
  ];

  //Q1 print country name and their capital  
// [ India->Delhi, America->WashingtonDC, France->Paris , England->London, Germany->Berlin] 

//boring solution 
// let newArr=[];
// for(let i=0;i<arr.length;i++)
// {
// newArr.push(arr[i].country +"->" + arr[i].capital)
// } return newArr

//expected solution

let countryCapital=worldCapitals.map(countryObj=>{
    return countryObj.country+"->"+countryObj.capital
})

console.log(countryCapital);

//Q2-> Return the number of countries with a particular population 
//{ 2cr: 3, 4cr: 1, 6cr: 1 }

let population=worldCapitals.reduce((obj,curr)=>{
    if(obj[curr.population]){
        obj[curr.population]=obj[curr.population]+1;
    }
    else{
        obj[curr.population]=1;
    }
    return obj
},{})

console.log(population);


//Q3 get country name with population less than 5cr
//[India, France,England,Germany]



//polyfills 

// map
// function usdToInr(ele){
//     return ele*85
// }
// let arrr=balanceSheet.map(usdToInr)


Array.prototype.myMap=function(logic){
    let newArr=[];
    //this->balancesheet
    for(let i=0;i<this.length;i++){
        let ans=logic(this[i]);
        newArr.push(ans);
    }
    return newArr;
}

let num=[20,21,22,23,24,25,26];

function square(ele){
    return ele*ele
}
squaredNum=num.myMap(square);
console.log(squaredNum);


//polyfill for filter -> hw


//polyfill for reduce 
function logic(acc,curr){
    console.log("acc: ",acc," curr: ",curr);
    acc=acc+curr;
    return acc;
}
let totalBalance1=balanceSheet.reduce(logic,1000)//initial value of acc, if not given acc=arr[0]
console.log(totalBalance1);




Array.prototype.myReduce=function(logic,initialVal){
    let acc=initialVal!=undefined?initialVal:this[0];
    let si=initialVal!=undefined?0:1;
    for(let i=si;i<this.length;i++){
        let ans=logic(acc,this[i]);
        acc=ans;
    }
    return acc;
}

function sum1(acc,curr){
    acc=acc+curr;
    return acc;
}
let total=balanceSheet.myReduce(sum1,-300);
console.log(total);








