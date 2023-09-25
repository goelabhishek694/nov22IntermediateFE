const timerInput = document.querySelector(".timer_inputs");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
let hrs;
let mins;
let secs;
let timerId;
let timeLeft;


timerInput.addEventListener("input", (e)=>{handleInput(e,"hello")});
startBtn.addEventListener("click", handleStart);
resetBtn.addEventListener("click", handleReset);
pauseBtn.addEventListener("click", handlePause);
continueBtn.addEventListener("click", handleContinue);

function handleInput(e,str) {
    console.log(str);
    const ele = e.target;
    let inputType = ele.getAttribute("id");
    if (ele.value < 0) alert("Pls add positive value")
    switch (inputType) {
        case "hr":
            hrs = ele.value.slice(0, 2);
            ele.value = hrs;
            console.log(hrs);
            break;
        case "min":
            mins = ele.value.slice(0, 2);
            ele.value = mins;
            break;
        case "sec":
            secs = ele.value.slice(0, 2);
            ele.value = secs;
            break;
    }
}

function handleStart() {
    const totalTimeInSec = (hrs ? parseInt(hrs) * 3600 : 0) + (mins ? parseInt(mins) * 60 : 0) + parseInt(secs);
    // console.log(totalTimeInSec);
    startTimer(totalTimeInSec)
}

function startTimer(totalTimeInSec) {
    timerId = setInterval(() => {
        timeLeft = --totalTimeInSec;
        console.log(timeLeft);
        display(timeLeft)
        if (timeLeft == 0) clearInterval(timerId)
    }, 1000)
}

function display(totalTimeInSec) {
    //3661
    let hrs = parseInt(totalTimeInSec / 3600); //1
    totalTimeInSec = totalTimeInSec % 3600;
    let mins = parseInt(totalTimeInSec / 60); //1
    let secs = totalTimeInSec = totalTimeInSec % 60; //1
    Array.from(timerInput.children).forEach(ele => {
        if (ele.nodeName == "INPUT") {
            let inputType = ele.getAttribute("id");
            if (inputType == "hr") {
                hrs >= 10 ? ele.value = hrs : ele.value = `0${hrs}`
            }
            else if (inputType == "min") {
                mins >= 10 ? ele.value = mins : ele.value = `0${mins}`;
            }
            if (inputType == "sec") {
                secs >= 10 ? ele.value = secs : ele.value = `0${secs}`;
            }
        }
    })


}

function handleReset() {
    clearInterval(timerId);
    Array.from(timerInput.children).forEach(ele => {
        if (ele.nodeName == "INPUT") {
            ele.value = "00"
        }
    })
}

function handlePause() {
    //clear out the timer 
    clearInterval(timerId)
}

function handleContinue() {
    //i will get the sec at which timer was paused 
    //settimer again with timeleft
    startTimer(timeLeft)
}
