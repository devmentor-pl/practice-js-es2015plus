import User from './User.js'

class Admin extends User {
    constructor( {login = '', password = ''} ) {
        super({login , password })
    }

    // getAdmin() {
    //     console.log('Admin', this.login, this.password)
    // }

    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }

        return false;
    }
}

export default Admin