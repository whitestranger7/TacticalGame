import { ACTION, DEFEND, MOVE } from './types';

export const defend = () => (dispatch: any) => {
    dispatch({
        type: DEFEND
    });
    dispatch({
        type: MOVE
    })
};

export const doAction = (currentUnit: number, target: number) => (dispatch: any) => {
    dispatch({
        type: ACTION,
        payload: { currentUnit, target }
    });
    dispatch({
        type: MOVE
    });
};