import IActionBehavior from '../IActionBehavior';
import RangeTargetUnit from '../targetsBehavior/RangeTargetUnit';

export default class ParalyzeBehavior implements IActionBehavior{

    targetBehavior: RangeTargetUnit;

    constructor(public id: number) {
        this.targetBehavior = new RangeTargetUnit(id);
    }

    action() {
        // Choose unit and paralyze him ( delete from order for 1 round )
        console.log(`${this.id} paralyzed`);
        return true;
    }
};