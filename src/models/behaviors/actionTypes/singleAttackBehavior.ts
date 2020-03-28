import IActionBehavior from '../IActionBehavior';
import Board from '../../Board/BoardInstance';

export default class MeleeAttackBehavior implements IActionBehavior {
    
    constructor(public damage: number){
        this.damage = damage;
    }

    action(unit: number) {
        Board.getUnits[unit].takeDamage(this.damage);
        console.log(`${unit} got ${this.damage} damage`);
    };
};