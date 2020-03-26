import UnitModel from '../UnitModel';

export default class ParalyzeUnit extends UnitModel {
    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
    }
};