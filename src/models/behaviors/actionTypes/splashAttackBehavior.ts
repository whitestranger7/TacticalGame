import TargetUnit from '../TargetUnit';

export default class SplashAttackBehavior extends TargetUnit {
    constructor(public damage: number, public targets: number[]) {
        super(targets);
        this.damage = damage;
    }
};