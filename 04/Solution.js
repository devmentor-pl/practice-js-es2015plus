import User from './User.js';

export default class Solution extends User {
    isPasswordCorrect() {
        if(this.password.length >= 10) {
        return true;
        }
        return false;
    }
}

   
