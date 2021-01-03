import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';
//uwaga, uwaga - dodać node_modules do .gitignore chyba
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


const junior = new Junior( {} );
const mid = new Mid( {} );
const senior = new Senior( {} );
const juniorTime = junior.getApproximateTimeTaskDoneInHours( task );
const midTime = mid.getApproximateTimeTaskDoneInHours( task );
const seniorTime = senior.getApproximateTimeTaskDoneInHours( task );
console.log(`Junior: ${juniorTime}`);
console.log(`Mid: ${midTime}`);
console.log(`Senior: ${seniorTime}`);
