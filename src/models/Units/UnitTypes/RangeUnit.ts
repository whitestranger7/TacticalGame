import UnitModel from '../UnitModel';
import RangeAttackBehavior from '../../behaviors/actionTypes/rangeAttackBehavior';
import RangeTargetUnit from '../../behaviors/targetsBehavior/RangeTargetUnit'

export default class RangeUnit extends UnitModel {

    actionBehavior: RangeAttackBehavior;
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
        this.actionBehavior = new RangeAttackBehavior(damage);
        this.targetBehavior = new RangeTargetUnit(id);
    }

    
};