import { BOARD_INIT } from '../actions/types';

const initialState = {
    board: [],
    order: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case BOARD_INIT:
            return{
                board: payload.board,
                order: payload.order,
            }
        default:
            return state;
    }

};