import User from './User.js';

export default class Admin extends User {
    constructor( login = "", password = ""){
        super(login, password);
    }
    isPasswordCorrect(){
        if(this.password.length >= 10){
            // console.log("admin pass true");
            return true;
        }
        // console.log("admin pass false");
        return false;
    }
}
