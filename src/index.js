import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {searchUser, requestUser} from './reducer'
import 'tachyons'

const logger = createLogger()

const rootReduser = combineReducers({searchUser, requestUser})
const stor = createStore(rootReduser, applyMiddleware(thunkMiddleWare, logger))

ReactDOM.render(<Provider store={stor}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
