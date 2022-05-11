import Programmer from "./Programmer";

export default class Mid extends Programmer{
    constructor(skills, experience, willigness){
        super(skills, experience, willigness);
    }

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