import UnitModel from '../UnitModel';
import ParalyzeBehavior from '../../behaviors/actionTypes/paralyzeBehavior';
import ParalyzeUnitTarget from '../../behaviors/targetsBehavior/ParalyzeTargetUnit';

export default class ParalyzeUnit extends UnitModel {

    actionBehavior: ParalyzeBehavior;
    targetBehavior: ParalyzeUnitTarget;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected maxHh: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, maxHh, initiative, image);
        this.actionBehavior = new ParalyzeBehavior();
        this.targetBehavior = new ParalyzeUnitTarget(id);
    }
};