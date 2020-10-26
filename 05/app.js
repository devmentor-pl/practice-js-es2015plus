//import Programmer from './classes/Programmer';
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

//const programmer = new Programmer( features );
const programmerJunior = new Junior( features );
const programmerMid = new Mid( features );
const programmerSenior = new Senior( features );
const timeJunior = programmerJunior.getApproximateTimeTaskDoneInHours( task );
const timeMid = programmerMid.getApproximateTimeTaskDoneInHours( task );
const timeSenior = programmerSenior.getApproximateTimeTaskDoneInHours( task );
console.log('Szacowany czas rozwiązania zadania to:');
console.log(`- poziom Junior ${timeJunior} godzin`);
console.log(`- poziom Mid ${timeMid} godzin`);
console.log(`- poziom Senior ${timeSenior} godzin`);