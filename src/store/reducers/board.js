import { MOVE, ACTION, DEFEND } from '../actions/types';
import Board from '../../models/Board/BoardInstance';

const initialState = {
    board: Board.units,
    order: Board.order,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case MOVE:
            Board.action();
            return {
                ...state,
                order: Board.getOrder
            }
        case DEFEND:
            Board.getOrder[0].defend();
            return state;
        case ACTION:
            Board.getUnits[payload.currentUnit].actionBehavior.action(payload.target);
            return state;
        default:
            return state;
    }

};