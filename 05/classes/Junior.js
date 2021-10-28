
import Programmer from './Programmer';

export default class Junior extends Programmer {
    getMinMaxSkills() {
        return [0, 30];
    }
    getMinMaxExperience() {
        return [0, 30];
    }
    getMinMaxWilligness() {
        return [30, 70];
    }
}
