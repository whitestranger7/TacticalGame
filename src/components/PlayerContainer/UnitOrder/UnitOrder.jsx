import React from 'react';

import './UnitOrder.scss';

const UnitOrder = (props) => {

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
        <div className='order__units--wrapper' style={styles}>
            <div className='order__unit'>
                <h3>{props.name} - {props.id} ID</h3>
            </div>
        </div>
    );
};

export default UnitOrder;
