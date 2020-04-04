import IActionBehavior from './IActionBehavior';
import BoardModel from '../../Board/BoardModel';

export default class MeleeAttackBehavior implements IActionBehavior {
    
    constructor(public damage: number){
        this.damage = damage;
    }

    action(unitIndex: number, Board: BoardModel) {
        const currentUnit = Board.getUnits[unitIndex];
        currentUnit.takeDamage(this.damage);
    };
};