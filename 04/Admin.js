const { default: User } = require("./User");

export default class Admin extends User {

    constructor({ login = '', password = '' }) {
        super({ login, password })
    }

    isPasswordCorrect() {
        if (this.password.length >= 10) {
            return true;
        }
        return false;
    }
}