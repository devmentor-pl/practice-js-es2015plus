import Programmer from "./Programmer";
// skills: 20-60
// experience: 30-60
// willingness: 50-90
export default class Mid extends Programmer {
  constructor(options) {
    super(options);
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
