import Programmer from './classes/Programmer.js';
import Junior from './classes/Junior.js';
import Mid from './classes/Junior.js';
import Senior from './classes/Junior.js';

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
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior = new Junior(features);
const timeJunior = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior: ${timeJunior}`);

const mid = new Mid(features);
const timeMid = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid: ${timeMid}`);

const senior = new Senior(features);
const timeSenior = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior: ${timeSenior}`);
