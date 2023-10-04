import getCountries from "./fetchData.js";

const inputBox=document.getElementById("search-input");
const suggestionBox=document.querySelector(".suggestion-box")

const handleSuggestion= async (e)=>{
    let keyword=e.target.value;
    console.log(keyword);
    let countryNameArr=await handleSearch(keyword);
    populateSuggestions(countryNameArr);
    
}

const handleSearch=async (keyword)=>{
    let data=await getCountries(keyword);
    // console.log(data);
    if(data.message=='Page Not Found'){
        suggestionBox.classList.remove("visible")
        alert("keyword did not match suggestions")
        return;
    }
    let countryName=data.map(obj=>obj.name.common);
    console.log(countryName);
    return countryName;
}

const populateSuggestions=(countryNameArr)=>{
    if(countryNameArr.length){
        suggestionBox.classList.add("visible")
    }
    else{
        suggestionBox.classList.remove("visible")
    }
    suggestionBox.innerHTML='';
    const fragment=document.createDocumentFragment();
    countryNameArr.forEach(countryName=>{
        const li=document.createElement("li");
        li.innerText=countryName;
        fragment.appendChild(li);
    })
    suggestionBox.appendChild(fragment)
}
//debouncing in js
function debounce(fn,delay=1000){
    let timerId;
    return function(...args){
        clearTimeout(timerId)
        timerId=setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
let debouncedFn=debounce(handleSuggestion,300);
inputBox.addEventListener("input",debouncedFn);
// inputBox.addEventListener("input",handleSuggestion);