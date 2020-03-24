import React from 'react';
import './UnitBlock.scss';

const UnitBlock = (props: any) => {
    return (
        <div className='unit__block'>
            <div className='unit__info'>
                <div className='unit__logo'>
                    <img src={props.img} alt={props.alt} />
                </div>
            </div>
            <div className='unit__type'>
                <h4>{props.type.toUpperCase()}</h4>
            </div>
            <div className='unit__hp'>
                <h4>HP: {props.hp}</h4>
            </div>
        </div>
    );
};

export default UnitBlock;
