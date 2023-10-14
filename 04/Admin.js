import User from './User';
export class Admin extends User {
  isPasswordCorrect() {
    if (this.password.length >= 10) {
      return true;
    }
    return false;
  }
}
