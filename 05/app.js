import Programmer from './classes/Programmer.js';
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';

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

const juniorDev = new Junior()
const juniorTime = juniorDev.getApproximateTimeTaskDoneInHours( task )
console.log(`Szacowany czas dla Juniora: ${juniorTime} godzin.`)

const midDev = new Mid()
const midTime = midDev.getApproximateTimeTaskDoneInHours( task )
console.log(`Szacowany czas dla Juniora: ${midTime} godzin.`)


const seniorDev = new Senior()
const seniorTime = seniorDev.getApproximateTimeTaskDoneInHours( task )
console.log(`Szacowany czas dla Juniora: ${seniorTime} godzin.`)