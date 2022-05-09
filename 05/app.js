import Programmer from './classes/Programmer.js';

const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 2,
    size: 2,
}

// const programmer = new Programmer( features );
// const time = programmer.getApproximateTimeTaskDoneInHours( task );


import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';

const junior = new Junior()
const mid = new Mid()
const senior = new Senior()

const timeJunior = junior.getApproximateTimeTaskDoneInHours( task )
const timeMid = mid.getApproximateTimeTaskDoneInHours( task )
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task )

const timeForTask = `Junior potrzebuje na wykonanie zadania: ${timeJunior} godzin, mid potrzebuje: ${timeMid} godzin, a senior: ${timeSenior} godzin.`
console.log(timeForTask)
