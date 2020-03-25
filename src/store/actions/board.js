import { BOARD_INIT } from './types';

export const loadBoard = (board) => dispatch => {
    dispatch({
        type: BOARD_INIT,
        payload: board
    })
};