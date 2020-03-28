import MeleeUnit from '../Units/UnitTypes/MeleeUnit';
import RangeUnit from '../Units/UnitTypes/RangeUnit';
import MagicUnit from '../Units/UnitTypes/MagicUnit';
import HealUnit from '../Units/UnitTypes/HealUnit';
import ParalyzeUnit from '../Units/UnitTypes/ParalyzeUnit';
import { units } from '../Units/Units';

type unitTypes = MeleeUnit | RangeUnit | MagicUnit | HealUnit | ParalyzeUnit;

export default class Board {
    private team1: unitTypes[];
    private team2: unitTypes[];
    private order: unitTypes[];
    private units: unitTypes[];

    constructor(
        private readonly rows: number,
        private readonly columns: number
    ) {
        this.rows = rows;
        this.columns = columns;
        this.units = [];
        for (let i = 0; i < this.rows * this.columns; i++) {
            this.units.push(units[Math.floor(Math.random() * units.length)](i));
        }
        this.team1 = Array.from(this.units).slice(
            0,
            (this.rows * this.columns) / 2
        );
        this.team2 = Array.from(this.units).slice(
            (this.rows * this.columns) / 2,
            this.rows * this.columns
        );
        this.order = Array.from(this.units)
            .sort((unit1, unit2) => {
                if (unit1.initiativeGetter > unit2.initiativeGetter) return -1;
                return 1;
            })
            .filter(unit => {
                if (unit.getHp <= 0) {
                    return false;
                }
                return true;
            });
    }

    get getSize() {
        return this.rows * this.columns;
    }

    get getRows() {
        return this.rows;
    }

    get getCols() {
        return this.columns;
    }

    get getOrder() {
        return this.order;
    }

    set setOrder(newOrder: unitTypes[]){
        this.order = newOrder;
    }

    get getUnits() {
        return this.units;
    }

    action() {
        this.order = this.order.slice(1, this.order.length);
        if (this.order.length === 0) {
            this.order = Array.from(this.units)
                .sort((unit1, unit2) => {
                    if (unit1.initiativeGetter > unit2.initiativeGetter)
                        return -1;
                    return 1;
                })
                .filter(unit => {
                    if (unit.getHp <= 0) {
                        return false;
                    }
                    unit.undoDefend();
                    return true;
                });
        }
    }

    unitHealHp(unitIndex: number, heal: number) {
        this.units[unitIndex].healHp(heal);
    }

    unitTakeDamage(unitIndex: number, damage: number) {
        this.units[unitIndex].takeDamage(damage);
    }
}
