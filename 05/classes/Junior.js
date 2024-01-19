import Programmer from "./Programmer.js";

export default class Junior extends Programmer {
    constructor (skills, experience, willingness) {
        super();
    }

    getMinMaxSkills() {
        return [0, 30];
    }

    getMinMaxExperience() {
        return [0, 30];
    }

    getMinMaxWilligness() {
        return [30, 70]
    }
}