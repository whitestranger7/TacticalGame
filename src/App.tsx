import React from 'react';
import Board from './models/Board/BoardInstance';

import PlayerContainer from './components/PlayerContainer/PlayerContainer';
import UnitsContainer from './components/UnitsContainer/UnitsContainer';
import './App.scss';

const App = () => {
    return (
        <div className='App'>
            <PlayerContainer />
            <UnitsContainer />
        </div>
    );
};

export default App;
