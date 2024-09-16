import Programmer from './classes/Programmer.js'
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';

const features = {
    getSkillsRandomNumber() {
        return this.skills;
    },
    getExperienceRandomNumber() {
        return this.experience;
    },
    getWillingnessRandomNumber() {
        return this.willingness;
    }
}

const task = {
    difficult: 1,
    size: 1,
}
const programmer = new Programmer ( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task )

const junior = new Junior ( features );
const timeJunior = junior.getApproximateTimeTaskDoneInHours( task )

const mid = new Mid ( features );
const timeMid = mid.getApproximateTimeTaskDoneInHours( task )

const senior = new Senior ( features );
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );


console.log(time, 'Programmer', programmer)
console.log(timeJunior, "Junior", junior)
console.log(timeMid, 'Mid', mid)
console.log(timeSenior, 'Senior', senior)