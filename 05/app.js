import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';
// console.log(Junior)

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
console.log("programmer" ,programmer)
console.log("time", time);


const junior = new Junior();
const timeJunior = junior.getApproximateTimeTaskDoneInHours(task)
console.log("junior", junior)
console.log("timeJunior", timeJunior);

const mid = new Mid({skills: 20, experience: 55, willingness: 70});
const timeMid = mid.getApproximateTimeTaskDoneInHours({difficult: 2, size: 3});
console.log("mid", mid);
console.log("timeMid", timeMid);

const senior = new Senior();
const timeSenior = senior.getApproximateTimeTaskDoneInHours();
console.log("senior", senior);
console.log("timeSenior", timeSenior)