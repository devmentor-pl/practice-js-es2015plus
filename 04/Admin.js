import User from './User.js'

export default class Admin extends User {
    constructor( {login = '', password = ''} ) {
        super({login , password })
    }

    getAdmin() {
        console.log('Admin')
        console.log(this.login)
        console.log(this.password)
    }

    isValid() {
        if(this.isLoginCorrect() && this.isPasswordCorrect()) {
            console.log('isLoginCorrect && isPasswordCorrect')
            return true;
        }

        return false;
    }

    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }

        return false;
    }
}