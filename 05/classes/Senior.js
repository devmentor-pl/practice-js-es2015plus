import Programmer from "./Programmer";

export default class Senior extends Programmer {
    constructor({ skills, experience, willingness } = {}) {
        const minMaxSkills = [50, 90];
        const minMaxExperience = [60, 90];
        const minMaxWillingness = [40, 60];

        super({
            skills: isNumber(skills) ? skills : getRandomNumber(...minMaxSkills),
            experience: isNumber(experience) ? experience : getRandomNumber(...minMaxExperience),
            willingness: isNumber(willingness) ? willingness : getRandomNumber(...minMaxWillingness),
        });
    }
}