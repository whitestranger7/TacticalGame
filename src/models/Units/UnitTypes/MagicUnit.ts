import UnitModel from '../UnitModel';
import SplashAttackBehavior from '../../behaviors/actionTypes/splashAttackBehavior';
import RangeTargetUnit from '../../behaviors/targetsBehavior/RangeTargetUnit';

export default class MagicUnit extends UnitModel {

    actionBehavior: SplashAttackBehavior;
    targetBehavior: RangeTargetUnit;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new SplashAttackBehavior(damage);
        this.targetBehavior = new RangeTargetUnit(id);
    }
};