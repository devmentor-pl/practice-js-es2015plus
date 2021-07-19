import User from "./User.js";

const userData = { login: "user@devmentor.pl", password: "123456" };
const adminData = { login: "admin@devmentor.pl", password: "1234567890" };

const user = new User(userData);
user.register();

class Admin extends User {
  constructor(login, password) {
    super(login, password);
  }

  isPasswordCorrect() {
    if (this.password.length >= 10) {
      return true;
    }

    return false;
  }
}

const admin1 = new Admin(userData);
admin1.register();

const admin2 = new Admin(adminData);
admin2.register();
