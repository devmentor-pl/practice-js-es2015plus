import Programmer from './Programmer';
export default class Mid extends Programmer {
  constructor( { skills = null, experience = null, willingness = null } ) {
    super({});
    this.skills = this.returnParamIfNumberOrRandomNumber(skills, 50, 90);
    this.experience = this.returnParamIfNumberOrRandomNumber(experience, 60, 90);
    this.willingness = this.returnParamIfNumberOrRandomNumber(willingness, 40, 60);
  }
  returnParamIfNumberOrRandomNumber( value, min, max ) {
    if( typeof value === 'number' && value === value) {
        return value;
    } 

    return this.getRandomNumber(min, max);
    }
}