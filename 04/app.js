import User from './User.js';
 class Admin extends User {
    isPasswordCorrect() {
        return this.password.length >= 10;
    }
}

const userData = { login: 'user@devmentor.pl', password: '123456' };
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' };

const admin1 = new Admin( userData );
admin1.register(); // error

const admin2 = new Admin( adminData );
admin2.register(); // done