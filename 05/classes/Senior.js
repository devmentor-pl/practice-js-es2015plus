import Programmer from './Programmer';

export default class Senior extends Programmer {
    constructor(skills, experience, willingness) {
        super(skills, experience, willingness);
    }
    getMinMaxSkills() {
        //To kto ma skilla na 100, jeśli nie senior? :P 
        return [50, 90];
    }

    getMinMaxExperience() {
        return [60, 90];
    }

    getMinMaxWilligness() {
        //Widzę, że nie chce im się pracować? :D 
        return [40, 60]
    }
}