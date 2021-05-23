// import Programmer from './classes/Programmer';
// import Junior from './classes/Junior';
// import Mid from './classes/Mid';
// import Senior from './classes/Senior';

class Programmer {
    constructor( {skills = null, experience = null, willingness = null} = {} ) {
        this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();
        this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber();
        this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber();
    }

    isNumber(value) {
        if(
            typeof value === 'number'
            && value === value // NaN === NaN => false
        ) {
            return true;
        }

        return false;
    }

    getSkillsRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxSkills());
    }

    getExperienceRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxExperience())
    }

    getWillingnessRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxWilligness())
    }

    getMinMaxSkills() {
        return [0, 100];
    }

    getMinMaxExperience() {
        return [0, 100];
    }

    getMinMaxWilligness() {
        return [0, 100]
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    getApproximateTimeTaskDoneInHours( {difficult, size} ) {
        let counter = 0;
        let time = 0;
        let rand;        

        const done = 5 * difficult * size;
        const chance = ( (0.5 * this.skills) + (0.3 * this.experience) + (0.2 * this.willingness)) / 3;
        while(counter < done && time < 1000) {
            rand = this.getRandomNumber(0, 100);
            if(rand <= chance) {
                counter++;
            }

            time += 0.25;
        }

        return time;
    }
}


class Junior extends Programmer {
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

class Mid extends Programmer {
    getMinMaxSkills() {
        return [20, 60];
    }
    getMinMaxExperience() {
        return [30, 60];
    }
    getMinMaxWilligness() {
        return [60, 90];
    }
}

class Senior extends Programmer {
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

const junior = new Junior();
const juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
console.log(`Junior wykona zadanie w czasie ${juniorTime}h`);

const mid = new Mid();
const midTime = mid.getApproximateTimeTaskDoneInHours(task);
console.log(`Mid wykona zadanie w czasie ${midTime}h`);

const senior = new Senior();
const seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log(`Senior wykona zadanie w czasie ${seniorTime}h`);
