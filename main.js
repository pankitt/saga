import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect} from 'react-redux';

import  reducer from './reducers';

import thunk from 'redux-thunk';



//const store = createStore(reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let initialState = {};
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

// Container component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

