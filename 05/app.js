import Programmer from './classes/Programmer';
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';



const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const programmer = new Programmer( features );
const junior = new Junior( features );
const mid = new Mid( features );
const senior = new Senior( features );

const timeProgrammer = programmer.getApproximateTimeTaskDoneInHours( task );
const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );

console.log((timeProgrammer + ' ' + 'Programer'), (timeJunior + ' ' + 'Junior'), (timeMid + ' ' + 'Mid'), (timeSenior + ' ' + 'Senior'));
