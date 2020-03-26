import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBoard } from './store/actions/board';

import PlayerContainer from './components/PlayerContainer/PlayerContainer';
import UnitsContainer from './components/UnitsContainer/UnitsContainer';
import './App.scss';

import Board from './models/Board/BoardInstance'; 

const App = ({ loadBoard }: any) => {

    useEffect(() => {
        loadBoard(Board.getUnits, Board.getOrder);
    });


    return <div className='App'>
        <PlayerContainer />
        <UnitsContainer />
    </div>;
}

export default connect(null, { loadBoard })(App);
