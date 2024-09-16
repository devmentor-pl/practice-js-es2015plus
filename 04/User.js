import Admin from './Admin.js'
export default class User extends Admin {
	isPasswordCorrect() {
		if (this.password.length >= 6) {
			return true
		}

		return false
	}
}
