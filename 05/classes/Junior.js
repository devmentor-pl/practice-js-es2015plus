import Programmer from "./Programmer";

export default class Junior extends Programmer {
    constructor({ skills = null, experience = null, willingness = null } = {}) {
        super({ skills, experience, willingness })
    }
    getMinMaxSkills() {
        return [0, 30];
    }

    getMinMaxExperience() {
        return [0, 30];
    }

    getMinMaxWillingness() {
        return [30, 70]
    }
}