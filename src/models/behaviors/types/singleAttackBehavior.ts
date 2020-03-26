import IAttackBehavior from "../IActionBehavior";
import TargetUnit from '../TargetUnit';

export default class SingleAttackBehavior extends TargetUnit implements IAttackBehavior {
    constructor(public damage: number, public targets: number){
        super(targets);
        this.damage = damage;
    }

    getTargets() {
        return this.targets;
    }

};