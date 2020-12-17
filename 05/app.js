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
const junior = new Junior(30, 30, 30, task);
const mid = new Mid(undefined, undefined, undefined, task);
const senior = new Senior();




console.log(junior)
console.log(mid)
console.log(senior)