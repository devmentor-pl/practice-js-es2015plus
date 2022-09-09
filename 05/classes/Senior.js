import Programmer from "./Programmer.js";

export default class Senior extends Programmer {
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
