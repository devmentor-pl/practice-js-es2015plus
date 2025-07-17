import User from './User.js';

class Admin extends User {
    constructor(data) {
        super(data);
    }

    isPasswordCorrect() {
        return this.password.length >= 10;
    }
}

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user1 = new User(userData);
const admin1 = new Admin(userData);
const admin2 = new Admin(adminData);

user1.register();
admin1.register();
admin2.register();

