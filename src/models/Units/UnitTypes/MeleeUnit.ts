import MeleeAttackBehavior from '../../behaviors/actionTypes/meleeAttackBehavior';
import UnitModel from '../UnitModel';

export default class MeleeUnit extends UnitModel {

    actionBehavior: MeleeAttackBehavior;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        public hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new MeleeAttackBehavior(damage, id);
    }
};