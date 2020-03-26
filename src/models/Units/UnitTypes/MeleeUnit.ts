import UnitModel from '../UnitModel';

export default class MeleeUnit extends UnitModel {
    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly damage: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.damage = damage;
    }
};