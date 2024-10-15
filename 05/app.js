import Programmer from './classes/Programmer.js';
import Junior from './classes/Junior.js';
import Mid from "./classes/Mid.js";
import Senior from './classes/Senior.js';

const features = {
    skills: 10,
    experience: 10,
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 2,
}

const programmer = new Programmer(features);
const juniorDev = new Junior(features);
const midDev = new Mid(features);
const seniorDev = new Senior(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
const timeToCompleteJunior = juniorDev.getApproximateTimeTaskDoneInHours(task);
const timeToCompleteMid = midDev.getApproximateTimeTaskDoneInHours(task);
const timeToCompleteSenior = seniorDev.getApproximateTimeTaskDoneInHours(task)
console.log(time);
console.log(timeToCompleteJunior);
console.log(timeToCompleteMid);
console.log(timeToCompleteSenior);