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
    difficult: 1,
    size: 1,
}

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const juniorDev = new Junior(features);
const juniorDevTime = juniorDev.getApproximateTimeTaskDoneInHours(task);
console.log(juniorDevTime);

const midDev = new Mid(features);
const midDevTime = midDev.getApproximateTimeTaskDoneInHours(task);
console.log(midDevTime);

const seniorDev = new Senior(features);
const seniorDevTime = seniorDev.getApproximateTimeTaskDoneInHours(task);
console.log(seniorDevTime);
