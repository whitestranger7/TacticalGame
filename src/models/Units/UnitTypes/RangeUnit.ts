import UnitModel from '../UnitModel';

export default class RangeUnit extends UnitModel {
    constructor(
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(name, hp, initiative, image);
        this.damage = damage;
    }
};