import Programmer from "./classes/Programmer";

import Junior from "./classes/Junior";
import Mid from "./classes/Mid";
import Senior from "./classes/Senior";

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
const junior = new Junior();
const mid = new Mid();
const senior = new Senior();
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);
const timeJunior = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`time in hours for Junior: ${timeJunior}`);
const timeMid = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`time in hours for Mid: ${timeMid}`);
const timeSenior = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`time in hours for Senior: ${timeSenior}`);
