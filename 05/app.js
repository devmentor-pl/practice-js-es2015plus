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
const juniorProgrammer = new Junior( features );
const midProgrammer = new Mid( features );
const seniorProgrammer = new Senior( features );

const time = programmer.getApproximateTimeTaskDoneInHours( task );
const timeForJunior = juniorProgrammer.getApproximateTimeTaskDoneInHours( task );
const timeForMid = midProgrammer.getApproximateTimeTaskDoneInHours( task );
const timeForSenior = seniorProgrammer.getApproximateTimeTaskDoneInHours( task );
console.log(
    time, 
    timeForJunior, '<= junior',
    timeForMid, '<= mid',
    timeForSenior, '<= senior'
    );