import React from 'react';
import { connect } from 'react-redux';
import { doAction } from '../../store/actions/board';

import './PlayerContainer.scss';
import UnitOrder from './UnitOrder/UnitOrder';

import Board from '../../models/Board/BoardInstance';

const PlayerContainer = ({ doAction }: any) => {
    return (
        <div className='player__container'>
            <div className='btn__wrapper'>
                <button onClick={doAction} >Defend</button>
            </div>
            <div className='order__container'>
                {Board.getOrder.map((el, index) => {
                    let team = null;
                    el.getId <= 5 ? team = 1 : team = 2;
                    return <UnitOrder key={el.getId} name={el.getName} id={el.getId} team={team} />
                })}
            </div>
        </div>
    );
};

export default connect(null, { doAction })(PlayerContainer);
