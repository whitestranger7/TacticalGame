import UnitModel from '../UnitModel';
import HealBehavior from '../../behaviors/actionTypes/healBehavior';
import HealTargetUnit from '../../behaviors/targetsBehavior/HealTargetUnit';

export default class HealUnit extends UnitModel {

    actionBehavior: HealBehavior;
    targetBehavior: HealTargetUnit;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected hp: number,
        protected readonly heal: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new HealBehavior(heal);
        this.targetBehavior = new HealTargetUnit(id);
    }
};