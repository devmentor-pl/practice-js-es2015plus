import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
    // skills: 55, 
    // experience: 66, 
    // willingness: 77,
}

const task = {
    difficult: 2,
    size: 10,
}

// const programmer = new Programmer();
// const time = programmer.getApproximateTimeTaskDoneInHours( task );
// console.log('Programmer', time);

const junior = new Junior(features);
const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
console.log('Junior', timeJunior);

const mid = new Mid(features);
const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
console.log('Mid', timeMid);

const senior = new Senior(features);
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );
console.log('Senior', timeSenior);