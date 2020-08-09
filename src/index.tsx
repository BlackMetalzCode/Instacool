import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory as createHistory } from "history";
import { Router } from 'react-router'
import{ Provider } from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from './ducks'
import thunk from 'redux-thunk'
import services from './services'
const store = createStore(combineReducers({
  ...reducers,
}), applyMiddleware(thunk.withExtraArgument(services)))

const history = createHistory()




ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

