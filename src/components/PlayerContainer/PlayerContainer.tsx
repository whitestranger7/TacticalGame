import React from 'react';
import './PlayerContainer.scss';

const PlayerContainer = (props: any) => {
    return (
        <div className='player__container'>
            <div className='player__icon'>
                <h4>{props.name}</h4>
            </div>
            <div className='btn__wrapper'>
                <button>Defend</button>
            </div>
        </div>
    );
};

export default PlayerContainer;
