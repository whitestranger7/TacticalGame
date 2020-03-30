import React from 'react';
import { connect } from 'react-redux';

import './UnitBlock.scss';
import { doAction } from '../../store/actions/board';
import Board from '../../models/Board/BoardInstance';

const UnitBlock = (props: any) => {
    let styles = undefined;
    if (props.team === 1) {
        styles = {
            backgroundColor: 'rgb(161, 161, 243)',
            border: '',
            cursor: ''
        };
    } else {
        styles = {
            backgroundColor: 'rgb(203, 228, 92)',
            border: '',
            cursor: ''
        };
    }

    if (props.currentTarget) {
        styles.border = '5px solid red';
        styles.cursor = 'pointer';
    }
    if (props.currentUnit) {
        styles.border = '5px solid green';
    }

    let block = null;
    if (props.alive) {
        block = (
            <div
                className='unit__block'
                style={styles}
                onClick={
                    props.currentTarget
                        ? () =>
                              props.doAction(
                                  Board.getOrder[0].getId,
                                  props.index
                              )
                        : undefined
                }
            >
                <div className='unit__info'>
                    <div className='unit__index'>{props.index}</div>
                    <div className='unit__logo'>
                        <img src={props.img} alt={props.alt} />
                    </div>
                </div>
                <div className='unit__type'>
                    <h4>{props.name.toUpperCase()}</h4>
                </div>
                <div className='unit__hp'>
                    <h4>HP: {props.hp}</h4>
                </div>
            </div>
        );
    } else {
        block = (
            <div className='unit__block' style={{backgroundColor: styles.backgroundColor}}>
                <div className='unit__info'>
                    <div className='unit__index'>{props.index}</div>
                    <div className='unit__logo'>
                        <img
                            src={
                                'https://cdn.newsapi.com.au/image/v1/efafa67ad4396fceeb80a7513bd49a03?width=1024'
                            }
                            alt={'dead'}
                        />
                    </div>
                </div>
                <div className='unit__type'>
                    <h4>{'DEAD'}</h4>
                </div>
            </div>
        );
    }

    return block;
};

const mapStateToProps = (state: any) => {
    return {
        curUnit: state.board.order[0]
    };
};

export default connect(mapStateToProps, { doAction })(UnitBlock);
