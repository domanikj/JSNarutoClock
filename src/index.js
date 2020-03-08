// Inits
const date = new Date()
let grabDate = document.getElementById('date');
let grabTime = document.getElementById('time');

// Date
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

// Time
let hour = date.getHours();
let min  = date.getMinutes();
let sec  = date.getSeconds();

// Time & Date
let currDate = formatDate(padZero(month.toLocaleString()) + padZero(day.toString()) + year.toString());



let currTime = hour - 12+ ''+ min +'' + sec; 


console.log(currTime)

// Current date & time
grabDate.innerText = currDate



//console.log(grabDate.innerHTML = "ddssdfsdf")

//grabDate.innerHTML = currDate
// Functions
console.log(grabDate.innerHTML)


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
* Unshifts 0 at start of string if <= 1
* @param {String} current month
* @return an appended 0 at start of string
*/
function padZero(str){
    if(str.length <= 1) return "0"+str;
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

