import Programmer from "./Programmer";
// skills: 50-90
// experience: 60-90
// willingness: 40-60
export default class Senior extends Programmer {
  constructor(options) {
    super(options);
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
