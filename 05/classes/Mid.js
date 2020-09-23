import Programmer from './Programmer';
export default class Mid extends Programmer {


    getMinMaxSkills() {
        return [50, 90];
    }

    getMinMaxExperience() {
        return [30, 60];
    }

    getMinMaxWilligness() {
        return [50, 90]
    }
}