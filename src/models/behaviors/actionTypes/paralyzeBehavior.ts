import IActionBehavior from './IActionBehavior';
import Board from '../../Board/BoardInstance';

export default class ParalyzeBehavior implements IActionBehavior{

    action(unit: number) {
        Board.getUnits[unit].paralyze();
        console.log(`${unit} was paralyzed`);
        return true;
    }
};