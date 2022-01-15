import Programmer from "./Programmer";

export default class Mid extends Programmer{
    constructor( {skills = null, experience = null, willingness = null} = {} ) {
        super(skills,experience,willingness);
        this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();
        this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber();
        this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber();
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