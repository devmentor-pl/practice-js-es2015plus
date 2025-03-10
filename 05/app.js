import Programmer from './classes/Programmer';

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

const junior = new Junior ()
const learningJuniroTime = junior.getApproximateTimeTaskDoneInHours( task );
console.log(learningJuniroTime, 'junior');

const mid = new Mid ()
const learningMidTime = mid.getApproximateTimeTaskDoneInHours( task );
console.log(learningJuniroTime, 'mid');

const senior = new Senior()
const learningSeniorTime = senior.getApproximateTimeTaskDoneInHours( task );
console.log(learningJuniroTime, 'senior');