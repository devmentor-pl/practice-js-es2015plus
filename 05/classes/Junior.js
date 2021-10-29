import Programmer from "./Programmer";

class Junior extends Programmer{

    getMinMaxSkills() {
        return [0, 30];
    }

    getMinMaxExperience() {
        return [0, 30];
    }

    getMinMaxWilligness() {
        return [0, 30]
    }
}

// export const sayHi = () => {
//     console.log('Hi');
// }

export default Junior;