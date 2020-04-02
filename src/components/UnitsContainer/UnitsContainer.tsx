import React from 'react';
import { connect } from 'react-redux';

import './UnitsContainer.scss';
import UnitBlock from '../UnitBlock/UnitBlock';
import Board from '../../models/Board/BoardInstance';

const UnitsContainer = ({ units, curUnit }: any) => {
    return (
        <div className='units__container'>
            {units.map((el: any, index: any) => {
                let team = null;
                index <= 5 ? (team = 1) : (team = 2);
                let currentUnit = null;
                let currentTarget = null;
                if(curUnit.id === index){
                    currentUnit = true;
                }
                if(Board.getUnits[curUnit.id].targetBehavior.getTargets(Board)?.indexOf(index) !== -1){
                    currentTarget = true;
                }
                return (
                    <UnitBlock
                        key={index}
                        index={index}
                        img={el.image}
                        alt={el.name}
                        name={el.name}
                        hp={el.hp}
                        team={team}
                        currentUnit={currentUnit}
                        currentTarget={currentTarget}
                        alive={el.getAliveStatus}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        units: state.board.board,
        curUnit: state.board.order[0]
    };
};

export default connect(mapStateToProps)(UnitsContainer);
