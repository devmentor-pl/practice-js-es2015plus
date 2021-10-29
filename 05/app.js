// import {sayHi} from './classes/Junior';
import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid'
import Senior from './classes/Senior';

const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

// sayHi();

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior = new Junior(features);
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
const juniorText = `Junior time is ${juniorTime} hours`;''
console.log(juniorText);

const mid = new Mid(features);
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
const midText = `Mid time is ${midTime} hours`;
console.log(midText);

const senior = new Senior(features);
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
const seniorText = `Senior time is ${seniorTime} hours`
console.log(seniorText);