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
    difficult: 20,
    size: 1,
}

// programmer instance
const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log('Total time programmer at task: ' + time);

// junior instance
const junior = new Junior( features );
const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
console.log('Total time junior at task: ' + timeJunior);

// mid instance
const mid = new Mid( features );
const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
console.log('Total time mid at task: ' + timeMid);

// junior instance
const senior = new Senior( features );
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );
console.log('Total time senior at task: ' + timeSenior);

programmer.logUser();
junior.logUser();
mid.logUser();
senior.logUser();
