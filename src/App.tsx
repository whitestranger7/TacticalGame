import React from 'react';
import Board from './models/Board';
import Player from './models/Player';
import { Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Sirena } from './models/Units';

import './App.scss';

function App() {

    const availableUnits = [Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Sirena];

    const units = [];
    for(let i = 0; i < 12; i++) {
        const instance = availableUnits[Math.floor(Math.random() * availableUnits.length)]();
        units.push(instance);
    };

    const player1 = new Player('Player 1', units.slice(0, 6));
    const player2 = new Player('Player 2', units.slice(6, 12));
    const board = new Board(player1, player2);

    

    board.player1.logUnits();
    board.player2.logUnits();

    return <div className='App'></div>;
}

export default App;