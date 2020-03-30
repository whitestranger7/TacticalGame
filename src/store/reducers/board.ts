import { MOVE, ACTION, DEFEND } from '../actions/types';
import Board from '../../models/Board/BoardInstance';

const initialState = {
    board: Board.getUnits,
    order: Board.getOrder,
    winner: Board.getWinner
};

export default function(state = initialState, action: any) {
    const { type, payload } = action;

    switch(type) {
        case MOVE:
            Board.action();
            if(Board.getWinner){
                alert(`${Board.getWinner} team won the game!`)
                window.location.reload();
            }
            return {
                ...state,
                order: Board.getOrder,
                winner: Board.getWinner
            }
        case DEFEND:
            Board.getOrder[0].defend();
            return state;
        case ACTION:
            Board.getUnits[payload.currentUnit].actionBehavior.action(payload.target);
            return state;
        default:
            return state;
    }

};