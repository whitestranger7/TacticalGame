export default class Player {
    constructor(
        private readonly name: String,
        private readonly units: Array<Object>,
    ){
        this.name = name;
        this.units = units;
    };
};