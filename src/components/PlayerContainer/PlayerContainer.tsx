import React from 'react';
import { connect } from 'react-redux';
import { defend } from '../../store/actions/board';

import './PlayerContainer.scss';
import UnitOrder from './UnitOrder/UnitOrder';

const PlayerContainer = ({ defend, order }: any) => {

    return (
        <div className='player__container'>
            <div className='btn__wrapper'>
                <button onClick={defend}>Defend</button>
            </div>
            <div className='order__container'>
                {order.map((el: any) => {
                    let team = null;
                    el.getId <= 5 ? team = 1 : team = 2;
                    return <UnitOrder key={el.getId} name={el.getName} id={el.getId} team={team} />
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        order: state.board.order
    }
};

export default connect(mapStateToProps, { defend })(PlayerContainer);
