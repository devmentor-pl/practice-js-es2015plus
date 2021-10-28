import User from './User.js';

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

class Admin extends User {
    // constructor(userData, adminData){            <-- jak można to rozwiązać za pomocą tego? czy jest to w ogóle potrzebne?
    //     super(userData, adminData);              <-- jak można to rozwiązać za pomocą tego? czy jest to w ogóle potrzebne?
    // }
    
    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }
        return false;
    }
}




const user = new User( userData );
user.register();

const admin1 = new Admin( userData );
admin1.register(); // error

const admin2 = new Admin( adminData );
admin2.register(); // done