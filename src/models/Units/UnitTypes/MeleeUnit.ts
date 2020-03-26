import singleAttackBehavior from '../../behaviors/actionTypes/singleAttackBehavior';
import UnitModel from '../UnitModel';

export default class MeleeUnit extends UnitModel {

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