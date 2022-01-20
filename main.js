
// define global variables

const stopWatch = document.querySelector(".stopwatch");
const timer = document.querySelector(".timer");
const setTimer = document.querySelector(".set-timer");
const colon = document.querySelector(".colon");
const stopwatchButtons = document.querySelector(".stopwatch-buttons");
const timerButtons = document.querySelector(".timer-buttons");

let hourDisplay = document.querySelector(".hour-display");
let minuteDisplay = document.querySelector(".minute-display");
let secondDisplay = document.querySelector(".second-display");
let milliSecondDisplay = document.querySelector(".millisecond-display");

let selectHours = document.querySelector("#select-hours");
let selectMinutes = document.querySelector("#select-minutes");
let selectSeconds = document.querySelector("#select-seconds");

let hoursOnDisplay = 0;
let minutesOnDisplay = 0;
let secondsOnDisplay = 0;
let milliSecondsOnDisplay = 0;

let startStopwatchButton = document.querySelector(".stopwatch-buttons .start-btn");
let stopPauseStopwatchButton = document.querySelector(".stopwatch-buttons .stop-btn");
let startTimerButton = document.querySelector(".timer-buttons .start-btn");
let stopPauseTimerButton = document.querySelector(".timer-buttons .stop-btn");


// choose timer or stopwatch

timer.addEventListener("click", ()=>{
    if (stopWatch.classList.contains("active")){
        stopWatchMode = false;
        timerMode = true;
        setTimer.classList.remove("hide");
        stopWatch.classList.remove("active");
        timer.classList.add("active");
        milliSecondDisplay.classList.add("hide");
        colon.classList.add("hide");
        stopwatchButtons.classList.add("hide");
        timerButtons.classList.remove("hide");
    }
})

stopWatch.addEventListener("click", ()=>{
    if (timer.classList.contains("active")){
        stopWatchMode = true;
        timerMode = false;
        setTimer.classList.add("hide");
        timer.classList.remove("active");
        stopWatch.classList.add("active");
        milliSecondDisplay.classList.remove("hide");
        colon.classList.remove("hide");
        stopwatchButtons.classList.remove("hide");
        timerButtons.classList.add("hide");
    }
})

// functions for increasing/decreasing time

function increaseMilliSecond(){
    milliSecondsOnDisplay++;
    if ((milliSecondsOnDisplay.toString()).length == 1){
        milliSecondDisplay.innerText = `0${milliSecondsOnDisplay}`;
    } else {
        milliSecondDisplay.innerText = milliSecondsOnDisplay;
    }
}

function increaseSecond(){
    secondsOnDisplay++;
    if ((secondsOnDisplay.toString()).length == 1){
        secondDisplay.innerText = `0${secondsOnDisplay}`;
    } else {
        secondDisplay.innerText = secondsOnDisplay;
    }
}

function increaseMinute(){
    minutesOnDisplay++;
    if ((minutesOnDisplay.toString()).length == 1){
        minuteDisplay.innerText = `0${minutesOnDisplay}`;
    } else {
        minuteDisplay.innerText = minutesOnDisplay;
    }
}

function increaseHour(){
    hoursOnDisplay++;
    if ((hoursOnDisplay.toString()).length == 1){
        hourDisplay.innerText = `0${hoursOnDisplay}`;
    } else {
        hourDisplay.innerText = hoursOnDisplay;
    }
}

function reduceSecond(){
    secondsOnDisplay--;
    if ((secondsOnDisplay.toString()).length == 1){
        secondDisplay.innerText = `0${secondsOnDisplay}`;
    } else {
        secondDisplay.innerText = secondsOnDisplay;
    }
}

function reduceMinute(){
    minutesOnDisplay--;
    if ((minutesOnDisplay.toString()).length == 1){
        minuteDisplay.innerText = `0${minutesOnDisplay}`;
    } else {
        minuteDisplay.innerText = minutesOnDisplay;
    }
}

function reduceHour(){
    hoursOnDisplay--;
    if ((hoursOnDisplay.toString()).length == 1){
        hourDisplay.innerText = `0${hoursOnDisplay}`;
    } else {
        hourDisplay.innerText = hoursOnDisplay;
    }
}

// code for stopwatch

function startStopwatch(){
    if (milliSecondsOnDisplay == 99){
        increaseSecond();
        milliSecondsOnDisplay = 0;
        if ((milliSecondsOnDisplay.toString()).length == 1){
            milliSecondDisplay.innerText = `0${milliSecondsOnDisplay}`;
        } else {
            milliSecondDisplay.innerText = milliSecondsOnDisplay;
        }
        if (secondsOnDisplay == 59){
            increaseMinute();
            secondsOnDisplay = 0;
            if ((secondsOnDisplay.toString()).length == 1){
                secondDisplay.innerText = `0${secondsOnDisplay}`;
            } else {
                secondDisplay.innerText = secondsOnDisplay;
            }
            if (minutesOnDisplay == 59){
                increaseHour();
                minutesOnDisplay = 0;
                if ((minutesOnDisplay.toString()).length == 1){
                    minuteDisplay.innerText = `0${minutesOnDisplay}`;
                } else {
                    minuteDisplay.innerText = minutesOnDisplay;
                }
            }
        } 
    } else {
        increaseMilliSecond();
    }
}

let myStopwatch;
let stopwatchActive = false;

startStopwatchButton.addEventListener("click", ()=>{
    if (stopwatchActive == false){
        startStopwatchButton.style.opacity = "0.3";
        myStopwatch = setInterval(startStopwatch, 10);
        stopPauseStopwatchButton.style.opacity = "1";
        stopPauseStopwatchButton.innerText = "Pause";
        stopPauseStopwatchButton.style.backgroundColor = "grey";
        stopPauseStopwatchButton.style.cursor = "pointer";
        stopwatchActive = true;
    }
})

stopPauseStopwatchButton.addEventListener("click", ()=>{
    if (stopPauseStopwatchButton.style.opacity != "0.3"){
        startStopwatchButton.style.opacity = "1";
        if (stopPauseStopwatchButton.innerText == "Restart"){
            clearInterval(myStopwatch);
            stopwatchActive = false;
            stopPauseStopwatchButton.style.opacity = "0.3";
            stopPauseStopwatchButton.innerText = "Pause";
            stopPauseStopwatchButton.style.backgroundColor = "grey";
            stopPauseStopwatchButton.style.cursor = "auto";
            reset();
        } else {
            clearInterval(myStopwatch);
            stopPauseStopwatchButton.style.backgroundColor = "red";
            stopPauseStopwatchButton.innerText = "Restart";
            stopwatchActive = false;
        }
    }
})

// code for timer 

// add selectable options for timer via DOM

function addSelectableHours(){
    for (let i=0; i<25; i++){
        let newSelectableHour = document.createElement("option");
        newSelectableHour.innerText = i;
        newSelectableHour.value = i;
        newSelectableHour.classList.add("hour");
        selectHours.append(newSelectableHour);
    }
}
addSelectableHours();

function addSelectableMinutes(){
    for (let i=0; i<61; i++){
        let newSelectableMinute = document.createElement("option");
        newSelectableMinute.innerText = i;
        newSelectableMinute.value = i;
        newSelectableMinute.classList.add("minute");
        selectMinutes.append(newSelectableMinute);
    }
}
addSelectableMinutes();

function addSelectableSeconds(){
    for (let i=0; i<61; i++){
        let newSelectableSecond = document.createElement("option");
        newSelectableSecond.innerText = i;
        newSelectableSecond.value = i;
        newSelectableSecond.classList.add("second");
        selectSeconds.append(newSelectableSecond);
    }
}
addSelectableSeconds();


// set & display timer

[selectHours, selectMinutes, selectSeconds].forEach((val)=>{
    val.addEventListener("change", ()=>{
        if (val == selectHours){
            hoursOnDisplay = val.value;
            if (val.value.length == 1){
                hourDisplay.innerText = `0${hoursOnDisplay}`;
            } else {
                hourDisplay.innerText = hoursOnDisplay;
            }
        } else if (val == selectMinutes){
            minutesOnDisplay = val.value;
            if (val.value.length == 1){
                minuteDisplay.innerText = `0${minutesOnDisplay}`;
            } else {
                minuteDisplay.innerText = minutesOnDisplay;
            }
        } else if (val == selectSeconds){
            secondsOnDisplay = val.value;
            if (val.value.length == 1){
                secondDisplay.innerText = `0${secondsOnDisplay}`;
            } else {
                secondDisplay.innerText = secondsOnDisplay;
            }
        }
    })
})

// start timer

function startTimer(){
    if (hoursOnDisplay != 0 || minutesOnDisplay != 0 || secondsOnDisplay != 0){
        if (secondsOnDisplay != 0){ 
            reduceSecond();
        } else if (secondsOnDisplay == 0){ 
            if (minutesOnDisplay != 0){ 
                reduceMinute(); 
                secondsOnDisplay = 60; 
                reduceSecond(); 
            } else if (minutesOnDisplay == 0){ 
                if (hoursOnDisplay != 0){ 
                    reduceHour(); 
                    minutesOnDisplay = 60; 
                    reduceMinute(); 
                    secondsOnDisplay = 60;
                    reduceSecond();
                }
            }
        }
    }
}

let myTimer;
let timerActive = false;

startTimerButton.addEventListener("click", ()=>{
    if (timerActive == false){
        myTimer = setInterval(startTimer, 1000);
        startTimerButton.style.opacity = "0.3";
        stopPauseTimerButton.style.opacity = "1";
        stopPauseTimerButton.innerText = "Pause";
        stopPauseTimerButton.style.backgroundColor = "grey";
        stopPauseTimerButton.style.cursor = "pointer";
    }
    timerActive = true;
})

// stop timer 

function stopTimer(){
    clearInterval(myTimer);
    timerActive = false;
    hoursOnDisplay = "00";
    hourDisplay.innerText = hoursOnDisplay;
    selectHours.selectedIndex = 0;
    minutesOnDisplay = "00";
    minuteDisplay.innerText = minutesOnDisplay;
    selectMinutes.selectedIndex = 0;
    secondsOnDisplay = "00";
    secondDisplay.innerText = secondsOnDisplay;
    selectSeconds.selectedIndex = 0;
}

stopPauseTimerButton.addEventListener("click", ()=>{
    if (stopPauseTimerButton.style.opacity != "0.3"){
        startTimerButton.style.opacity = "1";
        if (stopPauseTimerButton.innerText == "Restart"){
            clearInterval(myTimer);
            timerActive = false;
            stopPauseTimerButton.style.opacity = "0.3";
            stopPauseTimerButton.innerText = "Pause";
            stopPauseTimerButton.style.backgroundColor = "grey";
            stopPauseTimerButton.style.cursor = "auto";
            reset();
        } else {
            clearInterval(myTimer);
            timerActive = false;
            stopPauseTimerButton.style.backgroundColor = "red";
            stopPauseTimerButton.innerText = "Restart";
        }
    }
})


// reset

function reset(){
    milliSecondsOnDisplay = "00";
    secondsOnDisplay = "00";
    minutesOnDisplay = "00";
    hourDisplay = "00";
    milliSecondDisplay.innerText = milliSecondsOnDisplay;
    secondDisplay.innerText = secondsOnDisplay;
    minuteDisplay.innerText = minutesOnDisplay;
    hourDisplay.innerText = hoursOnDisplay;
}
