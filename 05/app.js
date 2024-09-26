import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';
import Programmer from './classes/Programmer';

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
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
console.log(juniorTime);

const mid = new Mid(features);
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
console.log(midTime);

const senior = new Senior(features);
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log(seniorTime);