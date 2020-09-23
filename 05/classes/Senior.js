import Programmer from './Programmer';
export default class Senior extends Programmer {


    getMinMaxSkills() {
        return [20, 60];
    }

    getMinMaxExperience() {
        return [60, 90];
    }

    getMinMaxWilligness() {
        return [40, 60]
    }
}