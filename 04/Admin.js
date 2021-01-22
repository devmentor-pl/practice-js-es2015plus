import User from './User.js'; // czy jak damu tutaj oddrazu admin to mozemy to jakos wykorzystać? 

export default class Admin extends User {
    isPasswordCorrect() {
        if (this.password.length >= 10) {
            return true;
        }
        return false; 
    }
}
