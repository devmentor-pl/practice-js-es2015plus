import Programmer from './Programmer';

export default class Junior extends Programmer {
  constructor({ skills = null, experience = null, willingness = null } = {}) {
    super({
      skills: skills !== null ? skills : this.getSkillsRandomNumber(0, 30),
      experience: experience !== null ? experience : this.getExperienceRandomNumber(0, 30),
      willingness: willingness !== null ? willingness : this.getWillingnessRandomNumber(30, 70)
    });
  }

  getMinMaxSkills() {
    return [0, 30];
  }

  getMinMaxExperience() {
    return [0, 30];
  }

  getMinMaxWillingness() {
    return [30, 70]
  }
}