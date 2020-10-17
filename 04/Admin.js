import User from "./User.js";

export default class Admin extends User {
  constructor(userData) {
    super(userData);
  }

  isPasswordCorrect() {
    if (this.password.length >= 10) {
      return true;
    }

    return false;
  }
}
