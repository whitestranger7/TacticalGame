import BoardModel from '../../Board/BoardModel';

export default interface IActionBehavior {
    action(unit: number, Board: BoardModel): void;
};