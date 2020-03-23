import React from 'react';
import './UnitBlock.scss';

const UnitBlock = (props: any) => {
    return (
        <div className='unit__block'>
            <div className='unit__info'>
                <div className='unit__logo'>
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className='unit__stats'>
                    <ul>
                        <li>Type: {props.type}</li>
                        <li>Damage: {props.damage}</li>
                        <li>Initiative: {props.initiative}</li>
                    </ul>
                </div>
            </div>
            <div className='unit__hp'>
                <h4>HP: {props.hp}</h4>
            </div>
        </div>
    );
};

export default UnitBlock;
