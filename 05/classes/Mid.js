import Programmer from "./Programmer.js";


class Mid extends Programmer {
    constructor( characteristics = {} ) {
        super( characteristics );
    }

    getMinMaxSkills() {
        return [20, 60];
    }

    getMinMaxExperience() {
        return [30, 60];
    }

    getMinMaxWilligness() {
        return [50, 90];
    }
}

export default Mid;
