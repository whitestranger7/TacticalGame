import React from 'react';
import { Skeleton } from './models/Units';

function App() {

    const skeleton = new Skeleton();
    console.log(skeleton.action());

    return <div className='App'></div>;
}

export default App;