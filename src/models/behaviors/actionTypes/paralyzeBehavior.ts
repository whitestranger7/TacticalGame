import IActionBehavior from '../IActionBehavior';
import Board from '../../Board/BoardInstance';

export default class ParalyzeBehavior implements IActionBehavior{

    action(unit: number) {
        const newOrder = Board.getOrder.filter(el => el.getId !== unit);
        Board.setOrder = newOrder;
        console.log(`${unit} was paralyzed`);
        return true;
    }
};