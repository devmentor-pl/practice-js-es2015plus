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

const junior = new Junior()
console.log(junior)
const timeJunior = junior.getApproximateTimeTaskDoneInHours(task);
console.log(timeJunior);

const mid = new Mid()
console.log(mid)
const timeMid = mid.getApproximateTimeTaskDoneInHours(task);
console.log(timeMid);

const senior = new Senior()
console.log(senior)
const timeSenior = senior.getApproximateTimeTaskDoneInHours(task);
console.log(timeSenior);

const programmer = new Programmer(features);
console.log(programmer)
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);