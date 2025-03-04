import Programmer from "./Programmer.js";

export default class Mid extends Programmer {
    constructor(features = {}) {
        super({
            skills: features.skills || null,
            experience: features.experience || null,
            willingness: features.willingness || null
        });
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