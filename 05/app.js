import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
    skills: 80, 
    experience: 80, 
    willingness: 80,
}

const task = {
    difficult: 1,
    size: 1,
}

const programmer = new Programmer( features );
const junior = new Junior ();
const mid = new Mid ();
const senior = new Senior ();

/* const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time); */

const finalTest = task => {
  while (task.difficult <= 3) {

    if (task.size > 3) {
      task.difficult++;
      task.size = 1;
    }
    if (task.difficult > 3) {
      break;
    }

    const programmerTime = programmer.getApproximateTimeTaskDoneInHours( task );
    const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
    const midTime = mid.getApproximateTimeTaskDoneInHours(task);
    const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);

        console.log(`Difficulty: ${task.difficult}`);
        console.log(`Size: ${task.size}`);
        console.log(`Programmer time: ${programmerTime}`);
        console.log(`Junior time: ${juniorTime}`);
        console.log(`Mid time: ${midTime}`);
        console.log(`Senior time: ${seniorTime}`);
        console.log('');

    task.size++

  }
}

finalTest(task);