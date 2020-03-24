import { MeleeUnit, RangeUnit, MagicUnit, HealUnit, ParalyzeUnit } from './unitTypes';

type unitTypes = MeleeUnit | RangeUnit | MagicUnit | HealUnit | ParalyzeUnit;

export default class Player {
    constructor(
        private readonly name: String,
        private units: Array<unitTypes>
    ){
        this.name = name;
        this.units = units;
    };

    logUnits() {
        console.log(this.units);
    };

};