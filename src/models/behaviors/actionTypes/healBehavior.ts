import IActionBehavior from './IActionBehavior';
import BoardModel from '../../Board/BoardModel';

export default class HealBehavior implements IActionBehavior{
    
    constructor(public healDeal: number) {
        this.healDeal = healDeal;
    };

    action(unit: number, Board: BoardModel) {
        Board.getUnits[unit].healHp(this.healDeal);
    }
};