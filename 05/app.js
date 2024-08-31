import Programmer from './classes/Programmer';
import { Junior} from './classes/Junior';
import { Mid } from './classes/Mid';
import { Senior } from './classes/Senior';

const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const junior = new Junior();
const mid = new Mid()
const senior = new Senior()


console.log(`Junior will complete the task in approximately ${junior.getApproximateTimeTaskDoneInHours(task)} hours.`);
console.log(`Mid will complete the task in approximately ${mid.getApproximateTimeTaskDoneInHours(task)} hours.`);
console.log(`Senior will complete the task in approximately ${senior.getApproximateTimeTaskDoneInHours(task)} hours.`);

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);