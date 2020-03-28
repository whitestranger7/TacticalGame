import SingleAttackBehavior from '../../behaviors/actionTypes/singleAttackBehavior';
import UnitModel from '../UnitModel';
import MeleeTargetUnit from '../../behaviors/targetsBehavior/MeleeTargetUnit';

export default class MeleeUnit extends UnitModel {

    actionBehavior: SingleAttackBehavior;
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
        this.actionBehavior = new SingleAttackBehavior(damage);
        this.targetBehavior = new MeleeTargetUnit(id);
    }
};