import Programmer from "./Programmer";

export default class Junior extends Programmer {
    constructor ({ skills, experience, willingness } = {}) {
        const minMaxSkills = [0, 30];
        const minMaxExperience = [0, 30];
        const minMaxWillingness = [30, 70];

        super({
            skills: isNumber(skills) ? skills : getRandomNumber(...minMaxSkills),
            experience: isNumber(experience) ? experience : getRandomNumber(...minMaxExperience),
            willingness: isNumber(willingness) ? willingness : getRandomNumber(...minMaxWillingness),
        });
    }
}