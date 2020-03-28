import { ACTION, DEFEND, MOVE } from './types';

export const defend = () => dispatch => {
    dispatch({
        type: DEFEND
    });
    dispatch({
        type: MOVE
    })
};

export const doAction = (currentUnit, target) => dispatch => {
    dispatch({
        type: ACTION,
        payload: { currentUnit, target }
    });
    dispatch({
        type: MOVE
    });
};