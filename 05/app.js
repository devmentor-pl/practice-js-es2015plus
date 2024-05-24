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

const programmer = new Programmer( features);
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(programmer);
console.log(time);

 const juniorProgrammer = new Junior (features)
const timeJunior = juniorProgrammer.getApproximateTimeTaskDoneInHours( task );
console.log(timeJunior);

const midProgrammer = new Mid ()
const timeMid = midProgrammer.getApproximateTimeTaskDoneInHours( task );
console.log(timeMid);


const seniorProgrammer = new Senior ()
const timeSenior = seniorProgrammer.getApproximateTimeTaskDoneInHours( task );
console.log(timeSenior);