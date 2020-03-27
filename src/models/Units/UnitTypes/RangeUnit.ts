import UnitModel from '../UnitModel';
import RangeAttackBehavior from '../../behaviors/actionTypes/rangeAttackBehavior';

export default class RangeUnit extends UnitModel {

    actionBehavior: RangeAttackBehavior;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        public hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new RangeAttackBehavior(damage, id);
    }

    
};