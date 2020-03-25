import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBoard } from './store/actions/board';

import PlayerContainer from './components/PlayerContainer/PlayerContainer';
import UnitsContainer from './components/UnitsContainer/UnitsContainer';
import './App.scss';

import Board from './models/Board/BoardInstance'; 

const App = ({ loadBoard }: any) => {

    useEffect(() => {
        loadBoard(Board.getUnits);
        console.log(Board.getOrder);
    });


    return <div className='App'>
        <PlayerContainer name={'Player 1'} />
        <UnitsContainer />
        <PlayerContainer name={'Player 2'} />
    </div>;
}

export default connect(null, { loadBoard })(App);
