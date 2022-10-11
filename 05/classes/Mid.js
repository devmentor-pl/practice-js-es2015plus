import Programmer from './Programmer';

export default class Mid extends Programmer {
    constructor(){
        super()
    }

    getMinMaxSkills() {
        return [20, 60];
    }

    getMinMaxExperience() {
        return [30, 60];
    }

    getMinMaxWilligness() {
        return [50, 90]
    }
}