import Programmer from './Programmer';
export default class Mid extends Programmer {
  constructor( { skills = null, experience = null, willingness = null } ) {
    super({});
    this.skills = this.returnParamIfNumberOrRandomNumber(skills, 20, 60);
    this.experience = this.returnParamIfNumberOrRandomNumber(experience, 30, 60);
    this.willingness = this.returnParamIfNumberOrRandomNumber(willingness, 50, 90);
  }
  returnParamIfNumberOrRandomNumber( value, min, max ) {
    if( typeof value === 'number' && value === value) {
        return value;
    } 

    return this.getRandomNumber(min, max);
    }
}