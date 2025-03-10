import Programmer from "./Programmer";

export default class Mid extends Programmer {
    
    getMinMaxSkills() {
        return [20, 60];
    }

    getMinMaxExperience() {
        return [30, 60];
    }

    getMinMaxWillingness() {
        return [50, 90]
    }
}