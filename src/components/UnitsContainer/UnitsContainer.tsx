import React from 'react';
import './UnitsContainer.scss';
import UnitBlock from '../UnitBlock/UnitBlock';
// import UnitBlock from '../UnitBlock/UnitBlock';

const UnitsContainer = () => {
    const dummyUnits = [
        'skeleton',
        'mage',
        'skeleton',
        'mage',
        'mage',
        'mage',
        'mage',
        'mage',
        'mage',
        'mage',
        'mage',
        'mage'
    ];

    return (
        <div className='units__container'>
            {dummyUnits.map(el => {
                return (
                    <UnitBlock
                        img={
                            'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        }
                        alt={'skeleton'}
                        type={el}
                        damage={50}
                        initiative={50}
                    />
                );
            })}
        </div>
    );
};

export default UnitsContainer;
