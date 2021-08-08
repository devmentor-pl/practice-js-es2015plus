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

const junior = new Junior()
const juniorTime = junior.getApproximateTimeTaskDoneInHours( task );

const mid = new Mid()
const midTime = mid.getApproximateTimeTaskDoneInHours( task );

const senior = new Senior()
const seniorTime = senior.getApproximateTimeTaskDoneInHours( task );