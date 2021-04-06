import Programmer from "./Programmer.js" //?dev Mógłbym tutaj napisac odrazu import Junior from "...". I wówczas odrazu utworzy mi sie zmienna o takiej nazwie i bedzie w niej to co zostało zdeklarowane jako export default, ale nie wiem czy w ten sposób mogę tego potem użyć...?
                                            //?dev mógłym do tej zmiennej jakoś później przypisać np nową metodę? Po kropce jakoś? Albo inacze...? s
export default class Junior extends Programmer {
    constructor( {skills = null, experience = null, willingness = null} = {} ) {
        super( {skills, experience, willingness} );
    }

    getMinMaxSkills() {
        return [0, 30];
    }

    getMinMaxExperience() {
        return [0, 30];
    }

    getMinMaxWilligness() {
        return [30, 70]
    }
}

