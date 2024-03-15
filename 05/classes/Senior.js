import Programmer from "./Programmer";

class Senior extends Programmer {
  constructor(skills, experience, willingness) {
    super(skills, experience, willingness);
  }

  getMinMaxSkills() {
    return [50, 90];
  }

  getMinMaxExperience() {
    return [60, 90];
  }

  getMinMaxWilligness() {
    return [40, 60];
  }
}

export default Senior;