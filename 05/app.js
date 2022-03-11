import Programmer from './classes/Programmer.js';
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js'

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
const juniorTime = junior.getApproximateTimeTaskDoneInHours( task );
console.log(juniorTime);

const mid = new Mid();
const midTime = mid.getApproximateTimeTaskDoneInHours( task );
console.log(midTime);

const senior = new Senior();
const seniorTime = senior.getApproximateTimeTaskDoneInHours( task );
console.log(seniorTime);

