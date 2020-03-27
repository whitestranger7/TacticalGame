import { BOARD_INIT, ACTION } from './types';

export const loadBoard = (board, order) => dispatch => {
    dispatch({
        type: BOARD_INIT,
        payload: { board, order }
    })
};

export const doAction = () => dispatch => {
    dispatch({
        type: ACTION
    });
};