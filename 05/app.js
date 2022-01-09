import Programmer from './classes/Programmer';
import Junior from "./classes/Junior";
import Mid from "./classes/Mid";
import Senior from "./classes/Senior";

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
const timeJuniorTask = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior: ${timeJuniorTask}`);

const mid = new Mid();
const timeMidTask = mid.getApproximateTimeTaskDoneInHours(task)
console.log(`Mid: ${timeMidTask}`);

const senior = new Senior();
const timeSeniorTask = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior: ${timeSeniorTask}`);