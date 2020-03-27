import UnitModel from '../UnitModel';
import ParalyzeBehavior from '../../behaviors/actionTypes/paralyzeBehavior';

export default class ParalyzeUnit extends UnitModel {

    actionBehavior: ParalyzeBehavior;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        public hp: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        super(id, name, hp, initiative, image);
        this.actionBehavior = new ParalyzeBehavior(id);
    }
};