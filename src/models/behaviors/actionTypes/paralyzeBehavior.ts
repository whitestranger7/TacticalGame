import IActionBehavior from './IActionBehavior';
import BoardModel from '../../Board/BoardModel';

export default class ParalyzeBehavior implements IActionBehavior{

    action(unit: number, Board: BoardModel) {
        Board.getUnits[unit].paralyze();
        return true;
    }
};