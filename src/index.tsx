import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// @ts-ignore
import { Provider } from 'react-redux';
import store from './store/store';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
