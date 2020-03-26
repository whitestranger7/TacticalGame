import UnitModel from '../UnitModel';
import healBehavior from '../../behaviors/actionTypes/healBehavior';

export default class HealUnit extends UnitModel {

    actionBehavior: object;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly heal: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new healBehavior(heal, 1);
    }
};