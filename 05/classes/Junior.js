import Programmer from './Programmer';
export default class Junior extends Programmer {
  constructor( { skills = null, experience = null, willingness = null } ) {
    super({});
    this.skills = this.returnParamIfNumberOrRandomNumber(skills, 0, 30);
    this.experience = this.returnParamIfNumberOrRandomNumber(experience, 0, 30);
    this.willingness = this.returnParamIfNumberOrRandomNumber(willingness, 30, 70);
  }
  returnParamIfNumberOrRandomNumber( value, min, max ) {
    if( typeof value === 'number' && value === value) {
        return value;
    } 

    return this.getRandomNumber(min, max);
    }
}