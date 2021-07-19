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

const programmer = new Programmer();
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);

const junior = new Junior(features);
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior time: ${juniorTime}`);

const mid = new Mid(features);
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid time: ${midTime}`);

const senior = new Senior(features);
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior time: ${seniorTime}`);
