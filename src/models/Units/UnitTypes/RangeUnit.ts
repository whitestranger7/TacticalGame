import UnitModel from '../UnitModel';
import singleAttackBehavior from '../../behaviors/actionTypes/singleAttackBehavior';

export default class RangeUnit extends UnitModel {

    actionBehavior: object;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly targets: number[],
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new singleAttackBehavior(damage, targets);
    }

    
};