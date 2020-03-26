import TargetUnit from '../TargetUnit';

export default class SingleAttackBehavior extends TargetUnit {
    constructor(public damage: number, public targets: number[]){
        super(targets);
        this.damage = damage;
    }
};