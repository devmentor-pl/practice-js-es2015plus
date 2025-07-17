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
    difficult: 8,
    size: 5,
}

const programmer = new Programmer( features );
const juniorProgrammer = new Junior();
const midProgrammer = new Mid();
const seniorProgrammer = new Senior();

console.log(`Junior: ${juniorProgrammer.getApproximateTimeTaskDoneInHours( task )} Mid: ${midProgrammer.getApproximateTimeTaskDoneInHours( task )} Senior ${seniorProgrammer.getApproximateTimeTaskDoneInHours( task )}`);