import { ACTION, DEFEND } from '../actions/types';
import Board from '../../models/Board/BoardInstance';

const initialState = {
    board: Board.units,
    order: Board.order,
};

export default function(state = initialState, action) {
    const { type } = action;

    switch(type) {
        case ACTION:
            Board.action();
            return {
                ...state,
                order: Board.getOrder
            }
        case DEFEND:
            return state;
        default:
            return state;
    }

};