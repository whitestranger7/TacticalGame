import IAttackBehavior from "../IActionBehavior";
import TargetUnit from '../TargetUnit';

export default class SplashAttackBehavior extends TargetUnit implements IAttackBehavior {
    constructor(public damage: number, public targets: number[]) {
        super(targets);
        this.damage = damage;
    }
};