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
    difficult: 3,
    size: 2,
}

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);


const junior = new Junior();
const mid = new Mid();
const senior = new Senior();

const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );


console.log(`Czas wykonania zadania przez Juniora: ${timeJunior} h`);
console.log(`Czas wykonania zadania przez Mida: ${timeMid} h`);
console.log(`Czas wykonania zadania przez Seniora: ${timeSenior} h`);
