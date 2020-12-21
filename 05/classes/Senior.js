import Programmer from "./Programmer";

/* class Senior {
    constructor(skills, experience, willingness, obj) {
        this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();
        this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber();
        this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber();
        this.time = this.isNumberAndSize(obj) ? this.getApproximateTimeTaskDoneInHours( obj ) : undefined;
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
    isNumberAndSize(value) {
        console.log(value)
        //const {a, b} = value;
        //console.log(a, b)
        // probowalem tu destrukturyzacji , nie wiem dlaczego sie nmie powiodlo.
        if(
            value && typeof value.difficult === 'number' && typeof value.size === 'number' && value.size <= 3 && value.size >= 1
        )
        {    
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
        return [0, 30];
    }

    getMinMaxExperience() {
        return [0, 30];
    }

    getMinMaxWilligness() {
        return [30, 70]
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
export default Senior; */
class Senior extends Programmer {
    constructor(skills, experience, willingness, obj) {
        super(skills, experience, willingness, obj)
        this.time = this.isNumberAndSize(obj) ? this.getApproximateTimeTaskDoneInHours( obj ) : undefined;
    }
    isNumberAndSize(value) {
        console.log(value)
        //const {a, b} = value;
        //console.log(a, b)
        // probowalem tu destrukturyzacji , nie wiem dlaczego sie nmie powiodlo.
        if(
            value && typeof value.difficult === 'number' && typeof value.size === 'number' && value.size <= 3 && value.size >= 1
        )
        {    
            return true;
        }

        return false;
    }
    getMinMaxSkills() {
        return [50, 90];
    }

    getMinMaxExperience() {
        return [60, 90];
    }

    getMinMaxWilligness() {
        return [40, 60]
    }
}
export default Senior;

