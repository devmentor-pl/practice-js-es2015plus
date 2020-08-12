export default class Admin extends class User{

    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }

        return false;
    }
}

//console.log('admin')