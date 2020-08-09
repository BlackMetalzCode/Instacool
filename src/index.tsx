import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory as createHistory } from "history";
import { Router } from 'react-router'


const history = createHistory()

ReactDOM.render(
    <Router history={history}>
    <App />
    </Router>,
  document.getElementById('root')
);

