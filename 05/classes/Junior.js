import Programmer from "./Programmer";

export default class Junior extends Programmer {
    constructor({skills = null, experience = null, willingness = null} = {} ) {

    super();

    this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();

    this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber();

    this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber();

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
}