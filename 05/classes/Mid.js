import Programmer from './Programmer'

class Mid extends Programmer{
    constructor({skills = null, experience = null, willingness = null} = {}) {
        super(
            {skills} = { skills: skills ? skills : Math.floor(Math.random() * (60 - 20 + 1) + 20)},
            {experience} = { experience: experience ? experience : Math.floor(Math.random() * (60 - 30 + 1) + 30)},
            {willingness} = { willingness: willingness ? willingness : Math.floor(Math.random() * (90 - 50 + 1) + 50)}
            )
        console.log('Mid constructor')
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
        return [20, 60]
    }
    getExperienceRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxExperiences());
    }
    getMinMaxExperiences() {
        return [30, 60]
    }
    getWillingnessRandomNumber() {
        return this.getRandomNumber(...this.getMinMaxWillingness());
    }
    getMinMaxWillingness() {
        return [50, 90]
    }
}
export default Mid
















