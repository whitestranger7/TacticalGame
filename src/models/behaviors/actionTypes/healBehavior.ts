import IActionBehavior from '../IActionBehavior';
import Board from '../../Board/BoardInstance';

export default class HealBehavior implements IActionBehavior{
    
    constructor(public healDeal: number) {
        this.healDeal = healDeal;
    };

    action(unit: number) {
        Board.getUnits[unit].healHp(this.healDeal);
        console.log(`${unit} was healed by ${this.healDeal} hp`);
    }
};