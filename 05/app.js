import Programmer from './classes/Programmer.js';
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
const mid = new Mid ( features );
const senior = new Senior( features );

const time = programmer.getApproximateTimeTaskDoneInHours( task );
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);

console.log(time);
console.log(juniorTime);
console.log(midTime);
console.log(seniorTime);