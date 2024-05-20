import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
    skills: 10,
    experience: 10,
    willingness: 10,
};

const task = {
    difficult: 1,
    size: 1,
};

const juniorProgrammer = new Junior(features);
const midProgrammer = new Mid(features);
const seniorProgrammer = new Senior(features);

const juniorTime = juniorProgrammer.getApproximateTimeTaskDoneInHours(task);
const midTime = midProgrammer.getApproximateTimeTaskDoneInHours(task);
const seniorTime = seniorProgrammer.getApproximateTimeTaskDoneInHours(task);

console.log("Junior Time:", juniorTime);
console.log("Mid Time:", midTime);
console.log("Senior Time:", seniorTime);