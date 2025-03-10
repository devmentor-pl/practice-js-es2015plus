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
const junior = new Junior();
const time2 = junior.getApproximateTimeTaskDoneInHours( {difficult: 3, size: 3});
const mid = new Mid();
const time3 = mid.getApproximateTimeTaskDoneInHours( {difficult: 3, size: 3});
const senior = new Senior();
const time4 = senior.getApproximateTimeTaskDoneInHours( {difficult: 3, size: 3} );

console.log(time);
console.log('junior: ', time2);
console.log('mid: ', time3);
console.log('senior: ', time4);
