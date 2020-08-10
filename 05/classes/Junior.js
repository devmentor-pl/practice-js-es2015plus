import Programmer from './Programmer';

export default class Junior extends Programmer {

  // JEŚLI CHCIAŁBYM TO ROZWIĄZAĆ W PODOBNY SPOSÓB, TO JAK?
  // constructor({skills, experience, willingness}) {
  constructor(...args) {
    super(...args);
  }
  getMinMaxSkills() {
      return [0, 30];
  }

  getMinMaxExperience() {
      return [0, 30];
  }

  getMinMaxWilligness() {
      return [30, 70]
  }
}
