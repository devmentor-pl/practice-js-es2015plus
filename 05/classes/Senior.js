import Programmer from "./programmer.js";

export class Senior extends Programmer {
	constructor({ skills, experience, willingness } = {}) {
		super({ skills, experience, willingness });
		this.initializeDefaults();
	}

	initializeDefaults() {
		if (!this.skills) {
			this.skills = this.getRandomNumber(50, 90);
		}

		if (!this.experience) {
			this.experience = this.getRandomNumber(60, 90);
		}

		if (!this.willingness) {
			this.willingness = this.getRandomNumber(40, 60);
		}
	}
}
