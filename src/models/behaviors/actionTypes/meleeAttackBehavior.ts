import IActionBehavior from '../IActionBehavior';

export default class MeleeAttackBehavior implements IActionBehavior {
    
    constructor(public damage: number){
        this.damage = damage;
    }

    action() {
        // choose one target and deal damage
        return true;
    };
};