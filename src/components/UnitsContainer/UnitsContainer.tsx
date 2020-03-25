import React from 'react';
import { connect } from 'react-redux';

import './UnitsContainer.scss';
import UnitBlock from '../UnitBlock/UnitBlock';

const UnitsContainer = ({ units }:any) => {
    return (
        <div className='units__container'>
            {units.map((el: any, index: any) => {
                return (
                    <UnitBlock
                        key={index}
                        img={el.image}
                        alt={el.name}
                        name={el.name}
                        hp={el.hp}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        units: state.board.board
    }
};

export default connect(mapStateToProps)(UnitsContainer);
