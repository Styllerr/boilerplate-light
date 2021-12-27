import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

import {
    history as routerHistory,
    registerServiceWorker,
} from './init';

// App
import { App } from './view';

const Root = () => {
    return (
        <Router history = { routerHistory }>
            <App />
        </Router>

    );
};

render(<Root />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    registerServiceWorker();
}
