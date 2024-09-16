import Junior from "./classes/Junior";
import Mid from "./classes/Mid";
import Senior from "./classes/Senior";
import Programmer from "./classes/Programmer";

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
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);

console.log(time);
console.log(juniorTime);
console.log(midTime);
console.log(seniorTime);
