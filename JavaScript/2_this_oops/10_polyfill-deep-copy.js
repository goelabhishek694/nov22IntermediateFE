let obj={
    firstName:"Pluto",
    breed:"Labrador",
    address:{
        street:"Vasant Vihar",
        state:"Delhi",
        country:"India"
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
}

function deepCopy(obj){
    let newObj={};
    for(let key in obj){
        let value=obj[key];
        let isObj=typeof value;
        // console.log(isObj);
        // console.log(typeof isObj);
        if(isObj=='object'){
            let internalDeepCopiedObj=deepCopy(value);
            newObj[key]=internalDeepCopiedObj;
        }
        else{
            newObj[key]=value;
        }
    }
    return newObj
}
 
let deepCopiedObj=deepCopy(obj);
deepCopiedObj.address.street="Golf Links";
console.log(deepCopiedObj);
console.log(obj);