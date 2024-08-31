export default class User {
    constructor({ login = '', password = '' }) {
        this.login = login;
        this.password = password;
    }

    register() {
        if (this.isValid()) {
            console.log('done');
            return true;
        }

        console.log('error');
        return false;
    }

    isValid() {
        return this.isLoginCorrect() && this.isPasswordCorrect();
    }

    isLoginCorrect() {
        return this.login.includes('@');
    }

    isPasswordCorrect() {
        return this.password.length >= 6;
    }
}
