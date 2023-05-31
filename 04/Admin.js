import User from "./User.js";

export default class Admin extends User {
  constructor(adminData) {
    super(adminData);
  }

  isPasswordCorrect() {
    if (this.password.length >= 10) {
      return true;
    }

    return false;
  }
}
