import UnitModel from '../UnitModel';
import ParalyzeBehavior from '../../behaviors/actionTypes/paralyzeBehavior';
import RangeUnitTarget from '../../behaviors/targetsBehavior/RangeTargetUnit';

export default class ParalyzeUnit extends UnitModel {

    actionBehavior: ParalyzeBehavior;
    targetBehavior: RangeUnitTarget;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected hp: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new ParalyzeBehavior();
        this.targetBehavior = new RangeUnitTarget(id);
    }
};