import User from './User.js';

class Admin extends User {
    isPasswordCorrect(){
       return this.password.length >= 10
    }
}
export default Admin;
