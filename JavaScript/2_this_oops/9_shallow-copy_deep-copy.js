//shallow copy
let arr=[10,20,30,[40,50],60,70];
//topmost level ele->arr[0]/[1]/[2]
//2nd level ele ->arr[3][0]/[3][1]

//spread performs shallow copy
// let newArr=[...arr];

// arr[3][0]=200;
// console.log(arr);
// console.log(newArr);

//Object.assign performs shallow copy

// let dog={
//     firstName:"Tommy",
//     breed:"Labrador",
//     address:{
//         street:"Beverely Hills",
//         city: "Los Angeles",
//         country:"USA"
//     }
// }
//             //target,src
// let copiedDog=Object.assign({firstName:"Pluto"},dog) //copy the src in target
// console.log(copiedDog);
// dog.address.city="California";
// console.log(dog);
// console.log(copiedDog);


// let animal = {
//     type: "Dog",
//     ...dog
//     }
// console.log(animal);

//deep copy -> copying at nested levels is possible

let dog={
    firstName:"Tommy",
    breed:"Labrador",
    address:{
        street:"Beverely Hills",
        city: "Los Angeles",
        country:"USA"
    }
}

// let stringifiedDog=JSON.stringify(dog);
// let parsedDog=JSON.parse(stringifiedDog);
// console.log(parsedDog);
// parsedDog.address.street="New York";
// console.log(parsedDog);
// console.log(dog);
// console.log(stringifiedDog);