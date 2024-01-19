import Programmer from './Programmer.js'

export default class Senior extends Programmer {
    constructor(skills, experience, willingness) {
        super()
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