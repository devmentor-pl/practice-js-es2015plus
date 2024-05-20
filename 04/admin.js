import User from "./User.js";

export default class Admin extends User {
	constructor({ login = "", password = "" }) {
		super({ login, password });
	}

	isPasswordCorrect() {
		return this.password.length >= 10;
	}
}
