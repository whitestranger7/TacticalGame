import React from 'react';
import Board from './models/Board';
import Player from './models/Player';
import { Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Sirena } from './models/Units';

function App() {

    const availableUnits = [Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Sirena];

    const units = [];
    for(let i = 0; i < 12; i++) {
        const instance = availableUnits[Math.floor(Math.random() * availableUnits.length)]();
        units.push(instance);
    };

    const board = new Board(units);
    const player_1 = new Player('Player 1');

    board.logBoardInfo();

    return <div className='App'></div>;

}

export default App;