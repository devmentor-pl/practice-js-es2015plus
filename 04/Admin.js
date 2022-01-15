import User from  './User.js';

export default class Admin extends User {
    constructor( {login = '', password = ''} ){
        super(login, password);
        this.login = login;
        this.password = password;
    }
    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }

        return false;
    }
}