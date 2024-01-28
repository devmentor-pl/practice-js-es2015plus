import Programmer from "./programmer.js";

export class Junior extends Programmer {
	constructor({ skills, experience, willingness } = {}) {
		super({ skills, experience, willingness });
		this.initializeDefaults();
	}

	initializeDefaults() {
		if (!this.skills) {
			this.skills = this.getRandomNumber(0, 30);
		}

		if (!this.experience) {
			this.experience = this.getRandomNumber(0, 30);
		}

		if (!this.willingness) {
			this.willingness = this.getRandomNumber(30, 70);
		}
	}
}
