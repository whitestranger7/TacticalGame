import UnitModel from '../UnitModel';
import singleAttackBehavior from '../../behaviors/types/singleAttackBehavior';

export default class RangeUnit extends UnitModel {

    actionBehavior: object;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new singleAttackBehavior(damage, 1);
    }

    
};