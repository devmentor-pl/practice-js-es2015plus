import Programmer from "./Programmer.js";

export default class Senior extends Programmer {
    constructor(features = {}) {
        super({
            skills: features.skills || null,
            experience: features.experience || null,
            willingness: features.willingness || null
        });
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