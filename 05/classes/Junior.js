import Programmer from "./Programmer";
// skills: 0-30
// experience: 0-30
// willingness: 30-70
export default class Junior extends Programmer {
  constructor(options) {
    super(options);
  }
  getMinMaxSkills() {
    return [0, 30];
  }

  getMinMaxExperience() {
    return [0, 30];
  }

  getMinMaxWilligness() {
    return [30, 70];
  }
}
