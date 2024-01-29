import Programmer from './classes/Programmer';
import { Junior } from "./classes/junior.js";
import { Mid } from "./classes/mid.js";
import { Senior } from "./classes/senior.js";

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


const juniorProgrammer = new Junior();
const midProgrammer = new Mid();
const seniorProgrammer = new Senior();

const timeJunior = juniorProgrammer.getApproximateTimeTaskDoneInHours(task);
const timeMid = midProgrammer.getApproximateTimeTaskDoneInHours(task);
const timeSenior = seniorProgrammer.getApproximateTimeTaskDoneInHours(task);

console.log(`Time for Junior Programmer: ${timeJunior} hours`);
console.log(`Time for Mid Programmer: ${timeMid} hours`);
console.log(`Time for Senior Programmer: ${timeSenior} hours`);


// .Junior is not a constructor nie rozumiem dlaczego konsola krzyczy :/