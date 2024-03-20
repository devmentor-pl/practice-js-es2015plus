import User from "./User";

class Admin extends User {
    constructor(name) {
    super(name);
    }

    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }

        return false;
    }

}

export default Admin 