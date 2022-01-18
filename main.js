
// add selectable options

let selectHours = document.querySelector("#select-hours");
let selectMinutes = document.querySelector("#select-minutes");
let selectSeconds = document.querySelector("#select-seconds");

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

let hourDisplay = document.querySelector(".hour-display");
let minuteDisplay = document.querySelector(".minute-display");
let secondDisplay = document.querySelector(".second-display");

let hoursOnDisplay = 0;
let minutesOnDisplay = 0;
let secondsOnDisplay = 0;

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

let startButton = document.querySelector(".start-btn");

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

let myTimer;
let timerActive = false;

startButton.addEventListener("click", ()=>{
    if (timerActive == false){
        myTimer = setInterval(startTimer, 1000);
    }
    timerActive = true;
})


// stop timer 

let stopButton = document.querySelector(".stop-btn");

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

stopButton.addEventListener("click", ()=>{
    stopTimer();
})