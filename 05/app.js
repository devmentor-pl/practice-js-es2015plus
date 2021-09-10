import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
    skills: 10,
    experience: 10,
    willingness: 10,
}

const task = {
    difficult: 3,
    size: 3,
}

const programmer = new Programmer(features);
const programmerTime = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(`Programmer: ${programmerTime}`);

const junior = new Junior();
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior: ${juniorTime}`);

const mid = new Mid();
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid: ${midTime}`);

const senior = new Senior();
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior: ${seniorTime}`);
