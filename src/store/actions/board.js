import { ACTION } from './types';

export const doAction = () => dispatch => {
    dispatch({
        type: ACTION
    });
};