import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import {HashRouter as HR} from 'react-router-dom'

ReactDOM.render(
    <HR>
    <Provider store={store}>
        <App />
    </Provider>
    </HR>
    , document.getElementById('root'));
registerServiceWorker();
