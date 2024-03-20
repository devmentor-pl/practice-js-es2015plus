import Programmer from "./Programmer";

export default class Senior extends Programmer {
    constructor({skills = null, experience = null, willingness = null} = {} ) {

    super();

    this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();

    this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber();

    this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber();

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