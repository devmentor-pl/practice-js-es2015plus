
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';


const task = {
    difficult: 1,
    size: 3,
}


const junior1 = new Junior();
const mid1 = new Mid();
const senior1 = new Senior();

const junior2 = new Junior();
const mid2 = new Mid();
const senior2 = new Senior();


console.log('Junior time: ', junior1.getApproximateTimeTaskDoneInHours(task));
console.log('Mid time: ', mid1.getApproximateTimeTaskDoneInHours(task));
console.log('Senior time: ', senior1.getApproximateTimeTaskDoneInHours(task));

console.log('Junior time: ', junior2.getApproximateTimeTaskDoneInHours(task));
console.log('Mid time: ', mid2.getApproximateTimeTaskDoneInHours(task));
console.log('Senior time: ', senior2.getApproximateTimeTaskDoneInHours(task));