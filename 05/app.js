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
    difficult: 2,
    size: 3,
}

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const features1 = {
    skills: 30,
    experience: 20,
    willingness: 85
};

const features2 = {
    skills: 70,
    experience: 50,
    willingness: 45
};

const features3 = {
    skills: 80,
    experience: 70,
    willingness: 30
};

const junior = new Junior(features1);
console.log("Czas wykonania przez juniora", junior.getApproximateTimeTaskDoneInHours(task));
const juniorRandom = new Junior();
console.log("Czas wykonania przez junior-random", juniorRandom.getApproximateTimeTaskDoneInHours(task));

const mid = new Mid(features2);
console.log("Czas wykonania przez mida", mid.getApproximateTimeTaskDoneInHours(task));
const midRandom = new Mid();
console.log("Czas wykonania przez mid-random", midRandom.getApproximateTimeTaskDoneInHours(task));

const senior = new Senior(features3);
console.log("Czas wykonania przez seniora", senior.getApproximateTimeTaskDoneInHours(task));
const seniorRandom = new Senior();
console.log("Czas wykonania przez senior-random", seniorRandom.getApproximateTimeTaskDoneInHours(task));