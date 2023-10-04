
async function getCountries(keyword){
    const response=await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
    const data=await response.json();
    return data;
}

// let ans=await getCountries("hel");
// ans.forEach(obj => {
//     console.log(obj.name.common);
// });

export default getCountries;
