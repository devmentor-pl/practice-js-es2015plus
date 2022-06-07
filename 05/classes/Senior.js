import Programmer from "./Programmer";

export default class Senior extends Programmer {
getMinMaxSkills() {
        return [20, 60];
    }

    getMinMaxExperience() {
        return [30, 60];
    }

    getMinMaxWilligness() {
        return [50, 90]
    }

}