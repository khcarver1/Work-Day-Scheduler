//DONE
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var dateDisplay = document.querySelector("#currentDay")
dateDisplay.textContent = moment().format('MMMM Do YYYY');
var currentDate = moment().format('MMMM Do YYYY');
var currentTime = moment().format('HH');
console.log(currentTime + " = the current time this code is using");
var taskTime = 9;
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
//in progress
var taskStatus = function() {
    //working classlist function to change colors based on time
    //todo: replace time var with momentjs function code
    if (currentTime > taskTime) {
        text1.classList.add("past");
        } else if (currentTime == taskTime) {
            text1.classList.add("present");
        } else {
            text1.classList.add("future");
        }
    if (currentTime > taskTime+1) {
        text2.classList.add("past");
        } else if (currentTime == taskTime+1) {
            text2.classList.add("present");
        } else {
            text2.classList.add("future");
    } 
    if (currentTime > taskTime+2) {
        text3.classList.add("past");
        } else if (currentTime == taskTime+2) {
            text3.classList.add("present");
        } else {
            text3.classList.add("future");
    } 
    if (currentTime > taskTime+3) {
        text4.classList.add("past");
        } else if (currentTime == taskTime+3) {
            text4.classList.add("present")
        } else {
            text4.classList.add("future");
    } 
    if (currentTime > taskTime+4) {
        text5.classList.add("past");
        } else if (currentTime === taskTime+4) {
            text5.classList.add("present");
        } else {
            text5.classList.add("future");  
    } 
    if (currentTime > taskTime+5) {
        text6.classList.add("past");
        } else if (currentTime = taskTime+5) {
            text6.classList.add("present")
        } else {
            text6.classList.add("future");
    } 
    if (currentTime > taskTime+6) {
        text7.classList.add("past");
        } else if (currentTime = taskTime+6) {
            text7.classList.add("present")
        } else {
            text7.classList.add("future");
    } 
    if (currentTime > taskTime+7) {
        text8.classList.add("past");
        } else if (currentTime === taskTime+7) {
            text8.classList.add("present")
        } else {
            text8.classList.add("future");
    } 
    if (currentTime > taskTime+8) {
        text9.classList.add("past");
        } else if (currentTime = taskTime+8) {
            text9.classList.add("present")
        } else {
            text9.classList.add("future");
    }  
}
taskStatus();
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//local storage object
// WHEN I refresh the page
// THEN the saved events persist
var globalTest
var saveBtn1 = document.querySelector("#saveBtnTask1");
saveBtn1.addEventListener("click", function(event) {
    event.preventDefault();
    var localStorageTestInfo = {
        taskDetail: text1.value.trim()
    };
    localStorage.setItem("localStorageTestInfo", (localStorageTestInfo.taskDetail));    
  });
text1.textContent = localStorage.getItem("localStorageTestInfo", "taskDetail");



