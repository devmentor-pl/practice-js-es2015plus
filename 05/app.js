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

const task2 = {
    difficult: 2,
    size: 3,
}

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);


const junior = new Junior();
console.log(junior.skills);
console.log(junior.experience);
console.log(junior.willingness);
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task2);
console.log(juniorTime);

const mid = new Mid();
console.log(mid.skills);
console.log(mid.experience);
console.log(mid.willingness);
const midTime = mid.getApproximateTimeTaskDoneInHours(task2);
console.log(midTime);


const senior = new Senior();
console.log(senior.skills);
console.log(senior.experience);
console.log(senior.willingness);
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task2);
console.log(seniorTime);
