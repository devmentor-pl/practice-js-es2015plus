import Programmer from './/Programmer';

export default class Mid extends Programmer {
  constructor({ skills = null, experience = null, willingness = null } = {}) {
    super({
      skills: skills !== null ? skills : this.getSkillsRandomNumber(50, 90),
      experience: experience !== null ? experience : this.getExperienceRandomNumber(60, 90),
      willingness: willingness !== null ? willingness : this.getWillingnessRandomNumber(40, 60)
    });
  }

  getMinMaxSkills() {
    return [50, 90];
  }

  getMinMaxExperience() {
    return [60, 90];
  }

  getMinMaxWillingness() {
    return [40, 60]
  }
}