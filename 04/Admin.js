import User from './User.js';

class Admin extends User {
    isPasswordCorrect() {
      if(this.password.length >= 10) {
        return true;
      }

      return false;
    }
}

export default Admin;