import UnitModel from '../UnitModel';
import RangeAttackBehavior from '../../behaviors/actionTypes/singleAttackBehavior';

export default class RangeUnit extends UnitModel {

    actionBehavior: RangeAttackBehavior;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        public hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly targets: number[],
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new RangeAttackBehavior(damage, id);
    }

    
};