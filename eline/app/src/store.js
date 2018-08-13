import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReduxPromiseListener from 'redux-promise-listener'

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootSaga from './sagas/index'
import rootReducer from "./reducers";

const dev = process.env.NODE_ENV === 'development';

/* eslint-disable */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [];
dev ? middleware.push(thunk, createLogger()) : middleware.push(thunk);
/* eslint-enable */

export const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

export const promiseListener = createReduxPromiseListener();
middleware.push(promiseListener.middleware);

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

export const store = createStore(rootReducer, enhancer);

const sagasManager = sagaMiddleware.run(rootSaga);



