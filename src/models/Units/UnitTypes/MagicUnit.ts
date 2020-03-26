import UnitModel from '../UnitModel';
import splashAttackBehavior from '../../behaviors/types/splashAttackBehavior';

export default class MagicUnit extends UnitModel {

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
        this.actionBehavior = new splashAttackBehavior(damage, [1]);
    }
};