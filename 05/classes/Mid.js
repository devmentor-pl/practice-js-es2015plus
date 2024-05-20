import Programmer from './Programmer';

export default class Mid extends Programmer {
  constructor({ skills = null, experience = null, willingness = null } = {}) {
    super({
      skills: skills !== null ? skills : this.getSkillsRandomNumber(20, 60),
      experience: experience !== null ? experience : this.getExperienceRandomNumber(30, 60),
      willingness: willingness !== null ? willingness : this.getWillingnessRandomNumber(50, 90)
    });
  }

  getMinMaxSkills() {
    return [20, 60];
  }

  getMinMaxExperience() {
    return [30, 60];
  }

  getMinMaxWillingness() {
    return [50, 90]
  }
}