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
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);


const junior1 = new Junior({});
const time1 = junior1.getApproximateTimeTaskDoneInHours( task );
console.log(time1);

const mid1 = new Mid({});
const time2 = mid1.getApproximateTimeTaskDoneInHours( task );
console.log(time2);

const senior1 = new Senior({});
const time3 = senior1.getApproximateTimeTaskDoneInHours( task );
console.log(time3);