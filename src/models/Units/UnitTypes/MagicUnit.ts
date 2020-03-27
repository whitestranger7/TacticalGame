import UnitModel from '../UnitModel';
import SplashAttackBehavior from '../../behaviors/actionTypes/splashAttackBehavior';

export default class MagicUnit extends UnitModel {

    actionBehavior: SplashAttackBehavior;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        public hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new SplashAttackBehavior(damage, id);
    }
};