import User from "./User.js";
import Admin from "./Admin.js";

const userData = { login: "user@devmentor.pl", password: "123456" };
const adminData = { login: "admin@devmentor.pl", password: "1234567890" };

const user = new User(userData);
user.register();

const admin = new Admin(userData);
admin.register();

const admin2 = new Admin(adminData);
admin2.register();
