import Programmer from "./Programmer";

export default class Mid extends Programmer {
    constructor({ skills, experience, willingness } = {}) {
        const minMaxSkills = [20, 60];
        const minMaxExperience = [30, 60];
        const minMaxWillingness = [50, 90];

        super({
            skills: isNumber(skills) ? skills : getRandomNumber(...minMaxSkills),
            experience: isNumber(experience) ? experience : getRandomNumber(...minMaxExperience),
            willingness: isNumber(willingness) ? willingness : getRandomNumber(...minMaxWillingness),
        });
    }
}