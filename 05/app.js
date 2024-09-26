import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Programmer from './classes/Programmer';
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
console.log('programmer', time);

const junior = new Junior();
const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
console.log('timeJunior', timeJunior);

const mid = new Mid();
const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
console.log('timeMid', timeMid);

const senior = new Senior();
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );
console.log('timeSenior', timeSenior);