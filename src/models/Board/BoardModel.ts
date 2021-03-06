import MeleeUnit from '../Units/UnitTypes/MeleeUnit';
import RangeUnit from '../Units/UnitTypes/RangeUnit';
import MagicUnit from '../Units/UnitTypes/MagicUnit';
import HealUnit from '../Units/UnitTypes/HealUnit';
import ParalyzeUnit from '../Units/UnitTypes/ParalyzeUnit';

import { Skeleton } from '../Units/units/Skeleton';
import { Centaur } from '../Units/units/Centaur';
import { Bandit } from '../Units/units/Bandit';
import { ElfArcher } from '../Units/units/ElfArcher';
import { SkeletonMage } from '../Units/units/SkeletonMage';
import { Archimage } from '../Units/units/Archimage';
import { Monk } from '../Units/units/Monk';
import { Sirena } from '../Units/units/Sirena';

type unitTypes = MeleeUnit | RangeUnit | MagicUnit | HealUnit | ParalyzeUnit;

const availableUnits = [Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Sirena];

export default class Board {
    private team1: unitTypes[];
    private team2: unitTypes[];
    private order: unitTypes[];
    private units: unitTypes[];
    private winner: 1 | 2 | null;

    constructor(
        private readonly rows: number,
        private readonly columns: number
    ) {
        this.rows = rows;
        this.columns = columns;
        this.units = [];
        for (let i = 0; i < this.rows * this.columns; i++) {
            this.units.push(availableUnits[Math.floor(Math.random() * availableUnits.length)](i));
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
        this.winner = null;
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
    
    get getUnits() {
        return this.units;
    }

    get getWinner() {
        return this.winner;
    }

    get getTeam1() {
        return this.team1;
    }

    get getTeam2() {
        return this.team2;
    }

    set setOrder(newOrder: unitTypes[]) {
        this.order = newOrder;
    }

    public checkWinner() {
        if(this.team1.filter(unit => !unit.getAliveStatus).length === this.getSize / 2) {
            this.winner = 2;
        }
        if(this.team2.filter(unit => !unit.getAliveStatus).length === this.getSize / 2){
            this.winner = 1;
        }
    }

    action() {
        this.checkWinner();
        this.order = this.order.slice(1, this.order.length).filter(unit => {
            if (unit.getHp <= 0) {
                return false;
            }
            unit.undoDefend();
            return true;
        });
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
        if(this.order[0].getParalyzedStatus) {
            this.order[0].undoParalyze();
            this.action();
        }
    }

    unitHealHp(unitIndex: number, heal: number) {
        this.units[unitIndex].healHp(heal);
    }

    unitTakeDamage(unitIndex: number, damage: number) {
        this.units[unitIndex].takeDamage(damage);
    }
}
