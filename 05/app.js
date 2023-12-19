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
    difficult: 5,
    size: 3,
}

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(`time whith Random Programer need to solve task ${time}`);

const junior = new Junior();
const timeJunior = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(`time whith Junior need to solve task ${timeJunior}`);


const mid = new Mid();
const timeMid = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(`time whith Mid need to solve task ${timeMid}`);

const senior = new Senior();
const timeSenior = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(`time whith Senior need to solve task ${timeSenior}`);