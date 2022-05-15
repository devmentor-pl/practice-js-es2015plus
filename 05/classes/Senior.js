import Programmer from './Programmer'

class Senior extends Programmer{
    constructor({skills = null, experience = null, willingness = null} = {}) {
        super(
            {skills} = { skills: skills ? skills : Math.floor(Math.random() * (90 - 50 + 1) + 50)},
            {experience} = { experience: experience ? experience : Math.floor(Math.random() * (90 - 60 + 1) + 60)},
            {willingness} = { willingness: willingness ? willingness : Math.floor(Math.random() * (60 - 40 + 1) + 40)}
            )
        console.log('Senior constructor')
        this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber()
        this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber()
        this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber()
    }
    getSkills() {
        return this.skills
    }
    getExperience() {
        return this.experience
    }
    getWillingness() {
        return this.willingness
    }
    getSkillsRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxSkills());
    }
    getMinMaxSkills() {
        return [50, 90]
    }
    getExperienceRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxExperiences());
    }
    getMinMaxExperiences() {
        return [60, 90]
    }
    getWillingnessRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxWillingness());
    }
    getMinMaxWillingness() {
        return [40, 60]
    }
}
export default Senior
















