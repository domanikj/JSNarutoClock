// Inits
let grabDate = document.getElementById('date');
let grabTime = document.getElementById('time');

// Function to call every second
setInterval(callDateTime, 1000);

const setBF = () => {

}

const setLunch = () => {
    
}
const setDinner = () => {

}

const setStudy = () => {
    
}

const setBreak = () => {

}

/*
* Gets current date time
* @return local date and time
*/
function callDateTime() {
    // Date obj
    let date = new Date()

    // Time
    let hour = date.getHours();
    let min  = date.getMinutes();
    let sec  = date.getSeconds();
    
    // Date
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();


    // Changing Dom
    grabTime.innerHTML = formatTime(padZero(formatHour(hour)) + ''+ padZero(min) +'' + padZero(sec)); 
    grabDate.innerHTML = formatDate(padZero((month + 1).toString()) + padZero(day.toString()) + year.toString());
}

/*
* Unshifts 0 at start of string if <= 1
* @param {String} current month
* @return an appended 0 at start of string
*/
function padZero(str){
    debugger;
    str = str.toString();
    if(str.length <= 1) {
        return "0"+str;
}
return str.toString()
}
/*
* Formats date properly
* @param {String} current date
* @return A string swith appended '-' 
*/
function formatDate(str) {
    let currDate = ""
    if(!str.includes('-')){
       currDate = str.slice(0,2) + '-' +str.slice(2,4) + '-'+str.substr(4);
       return currDate;
    }
}

/*
* Formats time properly
* @param {String} current time
* @return A string with appended ':' 
*/
function formatTime(str) {
    let currTime = ""
    if(!str.includes(':')){
       currTime = str.slice(0,2) + ':' +str.slice(2,4) + ':'+str.substr(4);
       return currTime;
    }
}

/*
* Formats hour properly
* @param {Number} get hour
* @return The correct hour 
*/
function formatHour(num){
    if(num > 12){
        return num - 12;
    }else if (num === 0){
        num = 12;
        return num;
    }else {
    return num;
    }
}

