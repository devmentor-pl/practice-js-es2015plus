export default class Programmer {
	constructor({ skills = null, experience = null, willingness = null } = {}) {
		this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();
		this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber();
		this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber();
	}

	isNumber(value) {
		if (
			typeof value === 'number' &&
			value === value // NaN === NaN => false
		) {
			return true;
		}

		return false;
	}

	getSkillsRandomNumber() {
		return this.getRandomNumber(...this.getMinMaxSkills());
	}

	getExperienceRandomNumber() {
		return this.getRandomNumber(...this.getMinMaxExperience());
	}

	getWillingnessRandomNumber() {
		return this.getRandomNumber(...this.getMinMaxWilligness());
	}

	getMinMaxSkills() {
		return [0, 100];
	}

	getMinMaxExperience() {
		return [0, 100];
	}

	getMinMaxWilligness() {
		return [0, 100];
	}

	getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	getApproximateTimeTaskDoneInHours({ difficult, size }) {
		let counter = 0;
		let time = 0;
		let rand;

		const done = 5 * difficult * size;
		const chance = (0.5 * this.skills + 0.3 * this.experience + 0.2 * this.willingness) / 3;
		while (counter < done && time < 1000) {
			rand = this.getRandomNumber(0, 100);
			if (rand <= chance) {
				counter++;
			}

			time += 0.25;
		}

		return time;
	}
}