import UnitModel from '../UnitModel';

export default class HealUnit extends UnitModel {
    constructor(
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly heal: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(name, hp, initiative, image);
        this.heal = heal;
    }
};