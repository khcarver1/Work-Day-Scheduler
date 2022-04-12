//DONE
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var dateDisplay = document.querySelector("#currentDay")
dateDisplay.textContent = moment().format('MMMM Do YYYY');
//current date
var currentDate = moment().format('MMMM Do YYYY');
//current hour 12 hour format
var currentTime = 12;
var text1 = document.querySelector("#text-status1");
var text2 = document.querySelector("#text-status2");
var text3 = document.querySelector("#text-status3");
var text4 = document.querySelector("#text-status4");
var text5 = document.querySelector("#text-status5");
var text6 = document.querySelector("#text-status6");
var text7 = document.querySelector("#text-status7");
var text8 = document.querySelector("#text-status8");
var text9 = document.querySelector("#text-status9");
//done
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
//task times
var taskTime = 9;

var taskBox1 = document.querySelector("#timeoftask1").textContent = taskTime;
var taskBox2 = document.querySelector("#timeoftask2").textContent = taskTime+1;
var taskBox3 = document.querySelector("#timeoftask3").textContent = taskTime+2; 
var taskBox4 = document.querySelector("#timeoftask4").textContent = taskTime+3; 
var taskBox5 = document.querySelector("#timeoftask5").textContent = taskTime+4; 
var taskBox6 = document.querySelector("#timeoftask6").textContent = taskTime+5; 
var taskBox7 = document.querySelector("#timeoftask7").textContent = taskTime+6; 
var taskBox8 = document.querySelector("#timeoftask8").textContent = taskTime+7; 
var taskBox9 = document.querySelector("#timeoftask9").textContent = taskTime+8;

//adding am and pm
document.querySelector("#timeoftask1").textContent = taskBox1 + "AM";
document.querySelector("#timeoftask2").textContent = taskBox2 + "AM";
document.querySelector("#timeoftask3").textContent = taskBox3 + "AM";
document.querySelector("#timeoftask4").textContent = taskBox4 + "PM";
document.querySelector("#timeoftask5").textContent = taskBox5 + "PM";
document.querySelector("#timeoftask6").textContent = taskBox6 + "PM";
document.querySelector("#timeoftask7").textContent = taskBox7 + "PM";
document.querySelector("#timeoftask8").textContent = taskBox8 + "PM";
document.querySelector("#timeoftask9").textContent = taskBox9 + "PM";

console.log(taskBox1 + "this is taskbox1 time");
//in progress

// var taskStatus = document.querySelector("#text-status")

var taskStatus = function() {
    //working classlist function to change colors based on time
    //todo: replace time var with momentjs function code
    if (currentTime > taskTime) {
        text1.classList.add("past");
        } else if (currentTime === taskTime) {
            text1.classList.add("present")
        } else (currentTime < taskTime) 
            text1.classList.add("future");
        }
    console.log(currentTime, taskTime);
    // if (currentTime > taskTime++) {
    //     text2.classList.add("past");
    //     } else if (currentTime === taskTime++) {
    //         text2.classList.add("present")
    //     } else {
    //     text2.classList.add("future");
    // } 
    // if (currentTime > taskTime) {
    //     text1.classList.add("past");
    //     } else if (currentTime === taskTime) {
    //         text1.classList.add("present")
    //     } else {
    //     text1.classList.add("future");
    // } 
    // if (currentTime > taskTime) {
    //     text1.classList.add("past");
    //     } else if (currentTime === taskTime) {
    //         text1.classList.add("present")
    //     } else {
    //     text1.classList.add("future");
    // } 
    // if (currentTime > taskTime) {
    //     text1.classList.add("past");
    //     } else if (currentTime === taskTime) {
    //         text1.classList.add("present")
    //     } else {
    //     text1.classList.add("future");
    // } 
    // if (currentTime > taskTime) {
    //     text1.classList.add("past");
    //     } else if (currentTime === taskTime) {
    //         text1.classList.add("present")
    //     } else {
    //     text1.classList.add("future");
    // } 
    // if (currentTime > taskTime) {
    //     text1.classList.add("past");
    //     } else if (currentTime === taskTime) {
    //         text1.classList.add("present")
    //     } else {
    //     text1.classList.add("future");
    // } 
    // if (currentTime > taskTime) {
    //     text1.classList.add("past");
    //     } else if (currentTime === taskTime) {
    //         text1.classList.add("present")
    //     } else {
    //     text1.classList.add("future");
    // } 
    // if (currentTime > taskTime) {
    //     text1.classList.add("past");
    //     } else if (currentTime === taskTime) {
    //         text1.classList.add("present")
    //     } else {
    //     text1.classList.add("future");
    // } 
    
    
    
    //turn grey if getcurrenttime is > hour box

    //turn red if getcurrenttime is = hour box

    //turn green if getcurrenttime is < hour box

    // if(getCurrentTime < timeBlockHour) {
    //     console.log("getcurtime is greater than timeblock");
    // }


taskStatus();



// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//local storage object

// WHEN I refresh the page
// THEN the saved events persist