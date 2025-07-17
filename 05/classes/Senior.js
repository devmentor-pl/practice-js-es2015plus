import Programmer from "./Programmer.js";


class Senior extends Programmer {
    constructor( characteristics = {} ) {
        super( characteristics );
    }

    getMinMaxSkills() {
        return [50, 90];
    }

    getMinMaxExperience() {
        return [60, 90];
    }

    getMinMaxWilligness() {
        return [40, 60];
    }
}

export default Senior;