import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
    skills: 10,
    experience: 10,
    willingness: 10,
}
const featuresJunior = {
    skills: 0,
    experience: 0,
    willingness: 30,
}
const featuresMid = {
    skills: 20,
    experience: 30,
    willingness: 50,
}
const featuresSenior = {
    skills: 50,
    experience: 60,
    willingness: 40,
}

const task = {
    difficult: 1,
    size: 1,
}

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);

const junior = new Junior(featuresJunior)
const junior2 = new Junior()
const timeJunior = junior.getApproximateTimeTaskDoneInHours(task)
const timeJunior2 = junior2.getApproximateTimeTaskDoneInHours(task)

console.log('junior: ' + timeJunior)
console.log('junior2: ' + timeJunior2)

const mid = new Mid(featuresMid)
const timeMid = mid.getApproximateTimeTaskDoneInHours(task)
console.log('mid: ' + timeMid)

const senior = new Senior(featuresSenior)
const timeSenior = senior.getApproximateTimeTaskDoneInHours(task)
console.log('senior: ' + timeSenior)