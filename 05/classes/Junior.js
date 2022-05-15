import Programmer from './Programmer'

class Junior extends Programmer{
    constructor({skills = null, experience = null, willingness = null} = {}) {
        super(
            {skills} = { skills: skills ? skills : Math.floor(Math.random() * (30 - 0 + 1) + 0)},
            {experience} = { experience: experience ? experience : Math.floor(Math.random() * (30 - 0 + 1) + 0)},
            {willingness} = { willingness: willingness ? willingness : Math.floor(Math.random() * (70 - 30 + 1) + 30)}
            )
        console.log('Junior constructor')
        this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber()
        this.experience = this.isNumber(experience) ? experience : this.getSkillsRandomNumber()
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
        return [0, 30];
    }
    getWillingnessRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxWillingness());
    }
    getMinMaxWillingness() {
        return [30, 70];
    }
}
export default Junior












