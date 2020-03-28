import React from 'react';
import './UnitBlock.scss';

const UnitBlock = (props: any) => {

    let styles = undefined;
    if(props.team === 1) {        
        styles = {
            backgroundColor: 'rgb(161, 161, 243)',
            border: '',
            cursor: ''
        }
    }else {
        styles = {
            backgroundColor: 'rgb(203, 228, 92)',
            border: '',
            cursor: ''
        }
    }
    if(props.currentTarget) {
        styles.border = '8px solid red';
        styles.cursor = 'pointer';
    }
    if(props.currentUnit) {
        styles.border = '8px solid green';
    }

    return (
        <div className='unit__block' style={styles}>
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
};

export default UnitBlock;
