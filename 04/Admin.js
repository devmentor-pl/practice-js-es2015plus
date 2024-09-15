import User from './User.js';

export default class Admin extends User {
    isPasswordCorrect() {
        return this.password.length >= 10;
    }
}