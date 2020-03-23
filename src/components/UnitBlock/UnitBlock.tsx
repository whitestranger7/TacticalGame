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
                        <li>{props.type}</li>
                        <li>{props.damage}</li>
                        <li>{props.initiative}</li>
                    </ul>
                </div>
            </div>
            <div className='unit__hp'></div>
        </div>
    );
};

export default UnitBlock;
