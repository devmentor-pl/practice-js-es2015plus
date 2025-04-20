import Programmer from './Programmer.js';

class Junior extends Programmer {
    constructor( characteristics = {} ) {
        super( characteristics );
    }

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

export default Junior;