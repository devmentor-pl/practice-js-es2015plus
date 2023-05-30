import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
	skills: 10,
	experience: 10,
	willingness: 10,
};

const task = {
	difficult: 1,
	size: 1,
};

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);

const junior = new Junior();
const timeJunior = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior: ${timeJunior}`);
const mid = new Mid();
const timeMid = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid: ${timeMid}`);
const senior = new Senior();
const timeSenior = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior: ${timeSenior}`);
