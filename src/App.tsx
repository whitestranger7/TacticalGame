import React from 'react';

import './App.scss';
import PlayerContainer from './components/PlayerContainer/PlayerContainer';
import UnitsContainer from './components/UnitsContainer/UnitsContainer';

function App() {
    return (
        <div className='App'>
            <PlayerContainer name={'Player 1'} />
            <UnitsContainer />
            <PlayerContainer name={'Player 2'} />
        </div>
    );
}

export default App;
