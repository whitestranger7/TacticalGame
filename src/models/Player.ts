export default class Player {
    static count = 1;
    constructor(
        private readonly name: String,
    ){
        this.name = name;
    };
};