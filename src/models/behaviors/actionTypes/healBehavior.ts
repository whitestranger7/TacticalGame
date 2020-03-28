import IActionBehavior from '../IActionBehavior';

export default class HealBehavior implements IActionBehavior{
    
    constructor(public healDeal: number) {
        this.healDeal = healDeal;
    };

    action() {
        // Choose one target and heal hp
        return true;
    }
};