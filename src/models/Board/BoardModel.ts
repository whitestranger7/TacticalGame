import MeleeUnit from '../Units/UnitTypes/MeleeUnit';
import RangeUnit from '../Units/UnitTypes/RangeUnit';
import MagicUnit from '../Units/UnitTypes/MagicUnit';
import HealUnit from '../Units/UnitTypes/HealUnit';
import ParalyzeUnit from '../Units/UnitTypes/ParalyzeUnit';
import unitTypes from '../../constants/unitTypes';

type unitTypes = MeleeUnit | RangeUnit | MagicUnit | HealUnit | ParalyzeUnit;

export default class Board {
    constructor(
        private units: unitTypes[],
        private team1: unitTypes[],
        private team2: unitTypes[],
        private order = Array.from(units).sort(function (unit1, unit2) {
            if(unit1.initiativeGetter > unit2.initiativeGetter) return -1;
            return 1;
        })
    ) {
        this.units = units;
        this.team1 = team1;
        this.team2 = team2;
        this.order = order;
    };

    get getOrder() {
        return this.order;
    }

    get getUnits() {
        return this.units;
    };

    unitTakeDamage(unitIndex: number, damage: number) {
        this.units[unitIndex].hp -= damage;
    };

};