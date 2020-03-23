import React from 'react';
import './PlayerContainer.scss';

const PlayerContainer = (props: any) => {
    return (
        <div className='player__container'>
            <div className='player__icon'>
                <h4>{props.name}</h4>
            </div>
        </div>
    );
};

export default PlayerContainer;
