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

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior = new Junior();
const time2 = junior.getApproximateTimeTaskDoneInHours( task );
console.log(time2);

const mid = new Mid();
const time3 = mid.getApproximateTimeTaskDoneInHours( task );
console.log(time3);

const senior = new Senior();
const time4 = senior.getApproximateTimeTaskDoneInHours( task );
console.log(time4);
