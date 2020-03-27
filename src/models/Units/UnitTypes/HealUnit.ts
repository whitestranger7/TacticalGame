import UnitModel from '../UnitModel';
import HealBehavior from '../../behaviors/actionTypes/healBehavior';

export default class HealUnit extends UnitModel {

    actionBehavior: HealBehavior;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        public hp: number,
        protected readonly heal: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new HealBehavior(heal, id);
    }
};