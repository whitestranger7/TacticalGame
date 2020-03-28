import UnitModel from '../UnitModel';
import SingleAttackBehavior from '../../behaviors/actionTypes/singleAttackBehavior';
import RangeTargetUnit from '../../behaviors/targetsBehavior/RangeTargetUnit'

export default class RangeUnit extends UnitModel {

    actionBehavior: SingleAttackBehavior;
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
        this.actionBehavior = new SingleAttackBehavior(damage);
        this.targetBehavior = new RangeTargetUnit(id);
    }

    
};