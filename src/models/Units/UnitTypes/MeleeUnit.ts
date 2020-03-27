import SingleAttackBehavior from '../../behaviors/actionTypes/singleAttackBehavior';
import UnitModel from '../UnitModel';

export default class MeleeUnit extends UnitModel {

    actionBehavior: SingleAttackBehavior;

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
        this.actionBehavior = new SingleAttackBehavior(damage, id);
    }
};