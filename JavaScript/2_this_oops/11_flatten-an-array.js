let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
//output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function flattenArr(srcArr){
    let newArr=[];
    for(let i=0;i<srcArr.length;i++){
        let ele=srcArr[i];
        let isElemArr=Array.isArray(ele);
        if(isElemArr){
            let internalFlattenedArr=flattenArr(ele);
            newArr.push(...internalFlattenedArr)
        }
        else{
            newArr.push(ele);
        }
    }
    return newArr;
}

let flattenedArr=flattenArr(input);
console.log(flattenedArr);


//IQ
// 1. deep copy 
// 2. flatten array 
// 3. prototype -> Array.prototype.flat=function(){} 
// 4. in flat function we can ask you to flatten it for n levels 
//flat(1) -> [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11]];
// 5.
// let obj={
//     firstName:"Pluto",
//     breed:"Labrador",
//     address:{
//         street:"Vasant Vihar",
//         state:"Delhi",
//         country:"India"
//     },
// }

// obj={
//     firstName:"",
//     breed:"",
//     "address.street":"",
//     "address.state":"",
//     "address.country":"",
// }
