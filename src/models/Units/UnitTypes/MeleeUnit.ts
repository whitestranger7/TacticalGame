import MeleeAttackBehavior from '../../behaviors/actionTypes/meleeAttackBehavior';
import UnitModel from '../UnitModel';
import MeleeTargetUnit from '../../behaviors/targetsBehavior/MeleeTargetUnit';

export default class MeleeUnit extends UnitModel {

    actionBehavior: MeleeAttackBehavior;
    targetBehavior: MeleeTargetUnit;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new MeleeAttackBehavior(damage);
        this.targetBehavior = new MeleeTargetUnit(id);
    }
};