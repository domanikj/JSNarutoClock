// Inits
let grabDate    = document.getElementById('date');
let grabTime    = document.getElementById('time');
let lunchHour   = document.getElementsByClassName("Lunch");
let DinnerHour  = document.getElementsByClassName("Dinner");
let DessertHour = document.getElementsByClassName("Dessert");

// Function to call every second
setInterval(callSets, 1000);



function callSets(){
    let monent = new Date();
    callDateTime();
    setLunch(monent.getHours());
}


function setLunch(num) {
    let startHour   = parseInt(num);
    let today       = new Date();
    let startTime   = new Date();

    if(startHour === 12) {
        startTime.setHours(12, 0, 0);
        today.setHours(13,0,0)
        if(startTime < today ) {
            document.getElementById('main-img').src  = 'https://cdn5.vectorstock.com/i/1000x1000/65/24/letter-j-painted-brush-vector-20406524.jpg';    
            document.getElementsByClassName('img-heading')[0].innerHTML = "Lunch!!! Is being served";
        }else{
            document.getElementById('main-img').src  = 'https://vignette.wikia.nocookie.net/boruto/images/0/0d/Uchiha_Sasuke.jpg/revision/latest/top-crop/width/360/height/450?cb=20180720230406';
            document.getElementsByClassName('img-heading')[0].innerHTML = "Not Lunch! Not Dinner! Not Dessert";
        }
    }else if(startHour === 1) {
        startTime.setHours(13, 0, 0);
        today.setHours(14,0,0)
        if(startTime < today ) {
            document.getElementById('main-img').src  = 'https://cdn5.vectorstock.com/i/1000x1000/65/24/letter-j-painted-brush-vector-20406524.jpg';    
            document.getElementsByClassName('img-heading')[0].innerHTML = "Lunch!!! Is being served";
        }else{
            document.getElementById('main-img').src  = 'https://vignette.wikia.nocookie.net/boruto/images/0/0d/Uchiha_Sasuke.jpg/revision/latest/top-crop/width/360/height/450?cb=20180720230406';
            document.getElementsByClassName('img-heading')[0].innerHTML = "Not Lunch! Not Dinner! Not Dessert";
        }
    }
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
function padZero(str) {
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

