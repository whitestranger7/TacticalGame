import IActionBehavior from '../IActionBehavior';
import HealTargetUnit from '../targetsBehavior/HealTargetUnits';

export default class HealBehavior implements IActionBehavior{
    
    targetBehavior: HealTargetUnit;

    constructor(public healDeal: number, public id: number) {
        this.healDeal = healDeal;
        this.targetBehavior = new HealTargetUnit(id)
    };

    action() {
        // Choose one target and heal hp
        console.log(`${this.id} heal ${this.healDeal} hp`);
        return true;
    }
};