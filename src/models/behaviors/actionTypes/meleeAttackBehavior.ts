import MeleeTargetUnit from '../targetsBehavior/MeleeTargetUnit';
import IActionBehavior from '../IActionBehavior';

export default class MeleeAttackBehavior implements IActionBehavior {
    
    targetBehavior: MeleeTargetUnit

    constructor(public damage: number, public id: number){
        this.damage = damage;
        this.targetBehavior = new MeleeTargetUnit(id);
    }

    action() {
        // choose one target and deal damage
        console.log(`${this.id} deal ${this.damage} damage`);
        return true;
    }
};