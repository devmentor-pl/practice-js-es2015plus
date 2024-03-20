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
const time_junior = junior.getApproximateTimeTaskDoneInHours( task );
console.log(`Junior wykona zadanie w ${time_junior} godzin`);

const mid = new Mid();
const time_mid = mid.getApproximateTimeTaskDoneInHours( task );
console.log(`Mid wykona zadanie w ${time_mid} godzin`);

const senior = new Senior();
const time_senior = senior.getApproximateTimeTaskDoneInHours( task );
console.log(`Senior wykona zadanie w ${time_senior} godzin`);