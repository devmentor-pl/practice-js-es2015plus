export default class User {
    constructor() {
        super();
    }

    register() {
        if(this.isValid()) {
            console.log('done');
            return true;
        }

        console.log('error');
        return false;
    }

    isValid() {
        if(this.isLoginCorrect() && this.isPasswordCorrect()) {
            return true;
        }

        return false;
    }

    isLoginCorrect() {
        if(this.login.includes('@')) {
            return true;
        }

        return false;
    }

    isPasswordCorrect() {
        if(this.password.length >= 6) {
            return true;
        }

        return false;
    }
}