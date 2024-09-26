export default class Admin extends User {
    isPasswordCorrect() {
        if (this.password.length >= 10) {
            return true;
        }

        return false;
    }
}

import User from "./User.js";
