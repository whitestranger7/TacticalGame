import IActionBehavior from '../IActionBehavior';
import RangeTargetUnit from '../targetsBehavior/RangeTargetUnit';

export default class SplashAttackBehavior implements IActionBehavior {
    
    targetBehavior: RangeTargetUnit;
    
    constructor(public damage: number, public id: number) {
        this.damage = damage;
        this.targetBehavior = new RangeTargetUnit(id);
    }

    action(){
        // All target are getting damage
        console.log(`${this.id} deal ${this.damage} damage`);
        return true;
    }
};