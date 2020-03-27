import IActionBehavior from '../IActionBehavior';
import RangeTargetUnit from '../targetsBehavior/RangeTargetUnit';

export default class SingleAttackBehavior implements IActionBehavior {

    targetBehavior: RangeTargetUnit;

    constructor(public damage: number, public id: number){
        this.damage = damage;
        this.targetBehavior =  new RangeTargetUnit(id);
    }

    action() {
        // choose one target and deal damage
        console.log(`${this.id} deal ${this.damage} damage`);
        return true;
    }
};