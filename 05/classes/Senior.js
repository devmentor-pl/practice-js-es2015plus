import Programmer from './Programmer';

export default class Senior extends Programmer {
  constructor(...args) {
    super(...args);
  }
  getMinMaxSkills() {
      return [99, 100];
  }

  getMinMaxExperience() {
      return [60, 90];
  }

  getMinMaxWilligness() {
      return [40, 60]
  }
}
