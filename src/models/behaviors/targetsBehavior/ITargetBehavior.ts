import BoardModel from '../../Board/BoardModel';

export default interface ITargetBehavior {
    getTargets(Board: BoardModel): number[] | null;
};