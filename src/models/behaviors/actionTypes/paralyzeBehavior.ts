import IActionBehavior from '../IActionBehavior';

export default class ParalyzeBehavior implements IActionBehavior{

    action() {
        // Choose unit and paralyze him ( delete from order for 1 round )
        return true;
    }
};