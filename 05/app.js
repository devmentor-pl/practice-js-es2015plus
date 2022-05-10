import Programmer from './classes/Programmer.js';
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';

const features1 = {
    skills: 10, 
    experience: 10, 
    willingness: 30,
}

const features2 = {
    skills: 50, 
    experience: 50, 
    willingness: 70,
}

const features3 = {
    skills: 70, 
    experience: 70, 
    willingness: 50,
}

const task = {
    difficult: 3,
    size: 3,
}

const programmer = new Programmer( features1 );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior = new Junior( features1 );
const time1 = junior.getApproximateTimeTaskDoneInHours( task );
console.log(time1);

const mid = new Mid( features2 );
const time2 = mid.getApproximateTimeTaskDoneInHours( task );
console.log(time2);

const senior = new Senior( features3 );
const time3 = senior.getApproximateTimeTaskDoneInHours( task );
console.log(time3);