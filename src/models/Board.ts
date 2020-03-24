import Player from './Player';

export default class Board {
    constructor(
        public player1: Player,
        public player2: Player,
    ) {
        this.player1 = player1;
        this.player2 = player2;
    }
}
