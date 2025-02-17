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
console.log(time);

const junior1 = new Junior;
console.log(junior1);
const timeJunior = junior1.getApproximateTimeTaskDoneInHours(task);
console.log(`Czas na wykonanie tego zadania przez juniora wynosi ${timeJunior}`);

const mid1 = new Mid;
console.log(mid1);
const timeMid = mid1.getApproximateTimeTaskDoneInHours(task);
console.log(`Czas na wykonanie tego zadania przez mida wynosi ${timeMid}`);

const senior1 = new Senior;
console.log(senior1);
const timeSenior = senior1.getApproximateTimeTaskDoneInHours(task);
console.log(`Czas na wykonanie tego zadania przez seniora wynosi ${timeSenior}`);