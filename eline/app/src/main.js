import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import {Provider} from 'react-redux';

import AppRoot from 'components/AppRoot';

import rootReducer from './reducers';
import {store, sagaMiddleware, promiseListener} from './store';
import rootSaga from "./sagas";

// Install Raven in production envs
if (process.env.NODE_ENV === 'production') {
    Raven.config(DJ_CONST.RAVEN_PUBLIC_DSN).install(); // eslint-disable-line
    // handle rejected promises
    window.addEventListener('unhandledrejection', (evt) => {
        Raven.captureException(evt.reason);
    });
    // If we have authenticated user, pass its data on to Raven
    if (DJ_CONST.user) {
        Raven.setUserContext({
            id: DJ_CONST.user.id,
            email: DJ_CONST.user.email,
            name: DJ_CONST.user.name,
        });
    }
}

function init() {
    const elem = document.getElementById("app-container");
    if (!elem) {
        return;
    }

    ReactDOM.render(
        <Provider store={store}>
            <AppRoot />
        </Provider>,
        elem,
    );
}


export {init}; // eslint-disable-line import/prefer-default-export
