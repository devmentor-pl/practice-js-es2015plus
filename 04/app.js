// import User from './User.js';

class User {
    constructor( {login = '', password = ''} ) {
        this.login = login;
        this.password = password;
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

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }
const user2Data = { login: 'user2@devmentor.pl', password: '123456781234' }

const user = new User( userData );
user.register();

class Admin extends User {
    isPasswordCorrect() {
        if (this.password.length >= 10) {
            return true;
        }
        return false;
    }
}

let admin_1 = new Admin(userData);
console.log(admin_1.register()) 

let admin_2 = new Admin(adminData);
console.log(admin_2.register())

let admin_3 = new Admin(user2Data);
console.log(admin_3.register())
