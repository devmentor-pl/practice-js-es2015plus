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

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior = new Junior();
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior wykona zadanie w czasie ${juniorTime}h`);

const mid = new Mid();
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid wykona zadanie w czasie ${midTime}h`);

const senior = new Senior();
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior wykona zadanie w czasie ${seniorTime}h`);
