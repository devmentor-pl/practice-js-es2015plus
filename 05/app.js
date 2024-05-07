// DZIAŁA

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
const programmerTime = programmer.getApproximateTimeTaskDoneInHours( task );
console.log('programmer=>', programmerTime);

const junior = new Junior( features );
const juniorTime = junior.getApproximateTimeTaskDoneInHours( task );
console.log('junior=>', juniorTime);

const mid = new Mid( features );
const midTime = mid.getApproximateTimeTaskDoneInHours( task );
console.log('mid=>', midTime);

const senior = new Senior( features );
const seniorTime = senior.getApproximateTimeTaskDoneInHours( task );
console.log('senior=>', seniorTime);

