import Programmer from "./Programmer";

export default class Senior extends Programmer {
    constructor(data) {
        super(data);
    }

    getMinMaxSkills() {
        return [50, 90];
    }

    getMinMaxExperience() {
        return [60, 90];
    }

    getMinMaxWilligness() {
        return [40, 60]
    }
}