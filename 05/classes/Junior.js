import Programmer from "./Programmer.js";

export default class Junior extends Programmer {
    constructor(features = {}) {
        super({
            skills: features.skills || null,
            experience: features.experience || null,
            willingness: features.willingness || null
        });
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