export {padZero, formatDate} 

/*
* Unshifts 0 at start of string if <= 1
* @param {String} current month
* @return an appended 0 at start of string
*/
const padZero = (str) => {
    if(str.length <= 1) return "0"+str;
}

/*
* Formats date properly
* @param {String} current date
* @return A string with appended '-' 
*/
const formatDate = (str) => {
    let currDate = ""
    if(!str.includes('-')){
       currDate = str.slice(0,2) + '-' +str.slice(2,4) + '-';
       return currDate;
    }
}
