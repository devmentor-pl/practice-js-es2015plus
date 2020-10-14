import Programmer from './Programmer.js'

export default class Mid extends Programmer {
  getMinMaxSkills() {
    return [20, 60];
  }

  getMinMaxExperience() {
    return [30, 50];
  }

  getMinMaxWilligness() {
    return [50, 90]
  }
}