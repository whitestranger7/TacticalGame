import { BOARD_INIT } from './types';

export const loadBoard = (board, order) => dispatch => {
    dispatch({
        type: BOARD_INIT,
        payload: { board, order }
    })
};