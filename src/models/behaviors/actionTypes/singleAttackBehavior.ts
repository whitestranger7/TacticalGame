import IActionBehavior from './IActionBehavior';
import Board from '../../Board/BoardInstance';

export default class MeleeAttackBehavior implements IActionBehavior {
    
    constructor(public damage: number){
        this.damage = damage;
    }

    action(unitIndex: number) {
        const currentUnit = Board.getUnits[unitIndex];
        currentUnit.takeDamage(this.damage);
        console.log(`${unitIndex} got ${this.damage} damage`);
    };
};