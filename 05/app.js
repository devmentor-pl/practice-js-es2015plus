//import Junior from './classes/Junior.js';
import Programmer from './classes/Programmer';



const features = {
    skills: 10,
    experience: 10,
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
// console.log(time);
// console.log(programmer)

class Junior extends Programmer {
    constructor() {
        super();
        console.log(`${this.getApproximateTimeTaskDoneInHours(task)}h to czas potrzebny dla juniora na wykonanie zadannia`);
    }
    getMinMaxSkills() {
        return [0, 30];
    }
    getMinMaxExperience() {
        return [0, 30];
    }
    getMinMaxWilligness() {
        return [30, 70];
    }
}

const junior = new Junior();
console.log(junior);

class Mid extends Programmer {
    constructor() {
        super();
        console.log(`${this.getApproximateTimeTaskDoneInHours(task)}h to czas potrzebny dla mida na wykonanie zadannia`);
    }
    getMinMaxSkills() {
        return [20, 60];
    }
    getMinMaxExperience() {
        return [30, 60];
    }
    getMinMaxWilligness() {
        return [50, 90];
    }
}

const mid = new Mid();
console.log(mid);

class Senior extends Programmer {
    constructor() {
        super();
        console.log(`${this.getApproximateTimeTaskDoneInHours(task)}h to czas potrzebny dla seniora na wykonanie zadannia`);
    }
    getMinMaxSkills() {
        return [50, 90];
    }
    getMinMaxExperience() {
        return [60, 90];
    }
    getMinMaxWilligness() {
        return [40, 60];
    }
}

const senior = new Senior();
console.log(senior);