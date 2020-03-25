import { BOARD_INIT } from '../actions/types';

const initialState = {
    board: []
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case BOARD_INIT:
            return{
                board: payload
            }
        default:
            return state;
    }

};