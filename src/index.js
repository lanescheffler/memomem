import React from 'react';
import ReactDOM from 'react-dom/client';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";

import {reducer} from './modules/memos'

const asyncMiddleware = storeAPI => next => action => {
    if (typeof action === 'function')
        return action(storeAPI.dispatch, storeAPI.getState)

    next(action)
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(asyncMiddleware)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <App/>
    </Provider>

);

