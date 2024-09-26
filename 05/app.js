import Programmer from './classes/Programmer.js';
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';

const task = {
    difficult: 2,
    size: 2,
};

const junior = new Junior();
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior time: ${juniorTime} hours`);

const mid = new Mid();
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid time: ${midTime} hours`);

const senior = new Senior();
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior time: ${seniorTime} hours`);
