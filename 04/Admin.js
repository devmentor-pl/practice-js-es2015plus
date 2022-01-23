import User from "./User";

export default class Admin extends User {
    // constructor(adminData) {
    // super(adminData);
    // }

// Tak szczerze, to nie za bardzo wiedzialam co wpisac do tego super ale zauwazylam, ze dziala tez bez. Czemu tak jest?

    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }
        return false;
    }
}

   
   
   
   