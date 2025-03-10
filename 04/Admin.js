export default class Admin extends User {
    isPasswordCorrect() {
        if(this.password.length >= 6) {
            return true;
        }

        return false;
    }
}