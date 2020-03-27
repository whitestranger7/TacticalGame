import { BOARD_INIT, ACTION } from '../actions/types';

const initialState = {
    board: [],
    order: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case BOARD_INIT:
            return {
                board: payload.board,
                order: payload.order,
            }
        case ACTION:
            const newOrder = state.order.slice(1, state.order.length);
            return {
                ...state,
                order: newOrder
            }
        default:
            return state;
    }

};