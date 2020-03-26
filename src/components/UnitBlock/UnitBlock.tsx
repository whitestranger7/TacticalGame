import React from 'react';
import './UnitBlock.scss';

const UnitBlock = (props: any) => {

    let styles = undefined;
    if(props.team === 1) {        
        styles = {
            backgroundColor: 'rgb(161, 161, 243)'
        }
    }
    if(props.team === 2) {
        styles = {
            backgroundColor: 'rgb(203, 228, 92)'
        }
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
