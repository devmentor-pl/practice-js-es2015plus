export default class Programmer {
    constructor( {skills = null, experience = null, willingness = null} ) {
        this.skills = this.returnParamIfNumberOrRandomNumber(skills);
        this.experience = this.returnParamIfNumberOrRandomNumber(experience);
        this.willingness = this.returnParamIfNumberOrRandomNumber(willingness);
    }

    returnParamIfNumberOrRandomNumber( value ) {
        if( typeof value === 'number' && value === value) {
            return value;
        } 

        return this.getRandomNumber(0, 100);
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    getApproximateTimeTaskDoneInHours( {difficult, size} ) {
        let counter = 0;
        let time = 0;
        let rand;        

        const done = 5 * difficult * size;
        const chance = ( (0.5 * this.skills) + (0.3 * this.experience) + (0.2 * this.willingness)) / 3;
        while(counter < done && time < 1000) {
            rand = this.getRandomNumber(0, 100);
            if(rand <= chance) {
                counter++;
            }

            time += 0.25;
        }

        return time;
    }
}