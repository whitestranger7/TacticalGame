import IActionBehavior from '../IActionBehavior';

export default class SplashAttackBehavior implements IActionBehavior {
    
    constructor(public damage: number) {
        this.damage = damage;
    }

    action(){
        // All target are getting damage
        return true;
    }
};