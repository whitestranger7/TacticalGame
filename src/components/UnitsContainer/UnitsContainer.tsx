import React from 'react';
import { connect } from 'react-redux';

import './UnitsContainer.scss';
import UnitBlock from '../UnitBlock/UnitBlock';

const UnitsContainer = ({ units }:any) => {
    return (
        <div className='units__container'>
            {units.map((el: any, index: any) => {
                let team = null;
                index <= 5 ? team = 1 : team = 2
                return (
                    <UnitBlock
                        key={index}
                        index={index}
                        img={el.image}
                        alt={el.name}
                        name={el.name}
                        hp={el.hp}
                        team={team}
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
