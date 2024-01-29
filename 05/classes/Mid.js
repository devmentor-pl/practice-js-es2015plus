import Programmer from "./programmer.js";

export class Mid extends Programmer {
	constructor({ skills, experience, willingness } = {}) {
		super({ skills, experience, willingness });
		this.initializeDefaults();
	}

	initializeDefaults() {
		if (!this.skills) {
			this.skills = this.getRandomNumber(20, 60);
		}

		if (!this.experience) {
			this.experience = this.getRandomNumber(30, 60);
		}

		if (!this.willingness) {
			this.willingness = this.getRandomNumber(50, 90);
		}
	}
}
