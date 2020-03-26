import UnitModel from '../UnitModel';
import paralyzeBehavior from '../../behaviors/types/paralyzeBehavior';

export default class ParalyzeUnit extends UnitModel {

    actionBehavior: object;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new paralyzeBehavior(1);
    }
};