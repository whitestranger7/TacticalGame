import React from 'react';
import Skeleton from './models/units/Skeleton';

function App() {

    const skeleton = new Skeleton();
    skeleton.getInfo();

    return <div className='App'></div>;
}

export default App;