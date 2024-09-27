import User from "./User";
export default class Admin extends User{

    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }

        return false;
    };
};