export default class Board {
    constructor(
        private units: Array<any>,
    ){
        this.units = units;
    }

    logBoardInfo() {
        console.log(this.units);
    };

    unitsGotDamage(units: Array<number>, damage: number) {
        for(let i of units) {
            this.units[i].takeDamage(damage);
        }
    };
};