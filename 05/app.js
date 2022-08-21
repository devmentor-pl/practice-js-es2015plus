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
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(`random: ${time}`);

const junior = new Junior();
const juniorsTime = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior's time: ${juniorsTime}`);

const mid = new Mid();
const midsTime = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid's time: ${midsTime}`);

const senior = new Senior();
const seniorsTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior's time: ${seniorsTime}`);